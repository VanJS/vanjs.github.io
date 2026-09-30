// Cookie-free click + pageview tracking for vanjs.com.
//
// Events are posted to the VanJS admin app, which stores them in its own
// Postgres and charts them at admin.vanjs.com/analytics. No third-party
// analytics service is involved, and nothing here is personally
// identifying: the only id is a random string kept in sessionStorage that
// dies with the tab, and neither IP nor user-agent is ever sent. That is
// what keeps this off the cookie-banner hook.
//
// Components don't import this module. `initAnalytics()` installs a single
// delegated click listener, and an element opts in by carrying data-track:
//
//   <a href="https://discord.gg/..." data-track="footer.social.discord"
//      data-track-section="footer" data-track-label="Discord">
//
// Keeping the wiring in the markup means adding a tracked element is a
// one-attribute change, with no handler to thread through props.

const DEFAULT_ENDPOINT = 'https://admin.vanjs.com/api/track';

const SESSION_ID_KEY = 'vanjs.analytics.sid';
const CAMPAIGN_KEY = 'vanjs.analytics.campaign';

// Names and labels land in a dashboard table, so cap them rather than
// letting a stray DOM text node post a paragraph.
const MAX_NAME = 120;
const MAX_LABEL = 200;
const MAX_HREF = 500;

type EventType = 'pageview' | 'click';
type Device = 'mobile' | 'tablet' | 'desktop';

interface Campaign {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

interface AnalyticsEvent extends Campaign {
  type: EventType;
  name?: string;
  section?: string;
  label?: string;
  href?: string;
  path: string;
  referrerHost?: string;
  device: Device;
  sessionId: string;
}

const configuredEndpoint = (import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined)?.trim();

// In dev the tracker stays silent unless an endpoint is set explicitly, so
// `npm run dev` never writes into the production events table but pointing
// at a locally running admin app still works.
const endpoint = configuredEndpoint || (import.meta.env.DEV ? '' : DEFAULT_ENDPOINT);

let started = false;

function truncate(value: string, max: number): string {
  const trimmed = value.trim().replace(/\s+/g, ' ');
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed;
}

function honoursDoNotTrack(): boolean {
  const nav = navigator as Navigator & { msDoNotTrack?: string };
  const signal = nav.doNotTrack ?? nav.msDoNotTrack ?? (window as { doNotTrack?: string }).doNotTrack;
  return signal === '1' || signal === 'yes';
}

function isEnabled(): boolean {
  return Boolean(endpoint) && typeof window !== 'undefined' && !honoursDoNotTrack();
}

function randomId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

// sessionStorage, not localStorage: a "session" here should end when the
// tab does, which keeps the id from becoming a long-lived visitor id.
// Private-mode browsers can throw on access, so every read/write is
// guarded and simply falls back to an in-memory id for the page's life.
let fallbackSessionId = '';

function readStored(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string): void {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage disabled — the in-memory fallback covers this page load.
  }
}

function sessionId(): string {
  const stored = readStored(SESSION_ID_KEY);
  if (stored) return stored;

  if (!fallbackSessionId) fallbackSessionId = randomId();
  writeStored(SESSION_ID_KEY, fallbackSessionId);
  return fallbackSessionId;
}

function device(): Device {
  const width = window.innerWidth;
  // The same breakpoints the layout uses (Tailwind md/lg), so "mobile" in
  // the dashboard means the same thing as the mobile menu on the page.
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function referrerHost(): string | undefined {
  if (!document.referrer) return undefined;
  try {
    const host = new URL(document.referrer).host;
    // Internal navigation isn't a traffic source.
    return host === window.location.host ? undefined : host;
  } catch {
    return undefined;
  }
}

// Campaign tags arrive on the landing URL only, but they should stay
// attached to everything the visitor clicks afterwards — otherwise a
// newsletter link looks like it drove a visit and no conversions.
function campaign(): Campaign {
  const stored = readStored(CAMPAIGN_KEY);
  if (stored) {
    try {
      return JSON.parse(stored) as Campaign;
    } catch {
      // Fall through and re-read from the URL.
    }
  }

  const params = new URLSearchParams(window.location.search);
  const fresh: Campaign = {};
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const name = params.get('utm_campaign');
  if (source) fresh.utmSource = truncate(source, MAX_NAME);
  if (medium) fresh.utmMedium = truncate(medium, MAX_NAME);
  if (name) fresh.utmCampaign = truncate(name, MAX_NAME);

  writeStored(CAMPAIGN_KEY, JSON.stringify(fresh));
  return fresh;
}

function send(event: AnalyticsEvent): void {
  const body = JSON.stringify(event);

  try {
    // text/plain keeps this a CORS "simple request", so a click that
    // navigates away isn't racing a preflight round-trip. sendBeacon also
    // survives the unload the click causes; fetch+keepalive is the
    // fallback for browsers that reject the beacon (payload over quota).
    if (typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
      if (navigator.sendBeacon(endpoint, blob)) return;
    }

    void fetch(endpoint, {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
      keepalive: true,
      credentials: 'omit',
    }).catch(() => {
      // Analytics must never surface as a broken page.
    });
  } catch {
    // Same.
  }
}

function track(type: EventType, fields: Partial<AnalyticsEvent> = {}): void {
  if (!isEnabled()) return;

  send({
    ...campaign(),
    ...fields,
    type,
    path: window.location.pathname,
    referrerHost: referrerHost(),
    device: device(),
    sessionId: sessionId(),
  });
}

export function trackPageview(): void {
  track('pageview');
}

export function trackClick(name: string, fields: { section?: string; label?: string; href?: string } = {}): void {
  track('click', {
    name: truncate(name, MAX_NAME),
    section: fields.section ? truncate(fields.section, MAX_NAME) : undefined,
    label: fields.label ? truncate(fields.label, MAX_LABEL) : undefined,
    href: fields.href ? truncate(fields.href, MAX_HREF) : undefined,
  });
}

function labelFor(element: HTMLElement): string | undefined {
  const explicit = element.getAttribute('data-track-label');
  if (explicit) return explicit;

  const aria = element.getAttribute('aria-label');
  if (aria) return aria;

  // An icon link's only text is usually its image alt.
  const image = element.querySelector('img[alt]');
  const alt = image?.getAttribute('alt');
  if (alt) return alt;

  return element.textContent || undefined;
}

function hrefFor(element: HTMLElement): string | undefined {
  const anchor = element.closest('a');
  return anchor?.href || undefined;
}

function handleClick(event: MouseEvent): void {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const element = target.closest<HTMLElement>('[data-track]');
  const name = element?.getAttribute('data-track');
  if (!element || !name) return;

  trackClick(name, {
    section: element.getAttribute('data-track-section') || undefined,
    label: labelFor(element),
    href: hrefFor(element),
  });
}

export function initAnalytics(): void {
  if (started || !isEnabled()) return;
  started = true;

  trackPageview();
  // Capture phase, so an element whose own handler stops propagation is
  // still counted.
  document.addEventListener('click', handleClick, { capture: true });
}
