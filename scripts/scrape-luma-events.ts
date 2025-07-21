import fs from 'fs';
import { formatInTimeZone } from 'date-fns-tz';

const eventsUrl = `https://api.lu.ma/calendar/get-items?calendar_api_id=cal-zWMR9kayN3xtYsd&pagination_limit=20&period=future`;

const eventsReq = await fetch(eventsUrl);
const eventsDataRaw = await eventsReq.json();

// console.log(JSON.stringify(eventsDataRaw.entries[0]));
/*
EXAMPLE EVENT JSON
{
  "api_id": "calev-6hYiQWPcAD5EdlZ",
  "event": {
    "api_id": "evt-dsEhvtZND6Xq0pm",
    "calendar_api_id": "cal-3uVd6qhBGAwEXbX",
    "cover_url": "https://images.lumacdn.com/event-covers/bu/43b67f0f-ecd9-473c-9af5-757533bff9f0.png",
    "end_at": "2025-07-30T03:00:00.000Z",
    "event_type": "independent",
    "hide_rsvp": false,
    "location_type": "offline",
    "name": "Levelling the Playing Field: Advocating for Yourself with Grace & Grit",
    "one_to_one": true,
    "recurrence_id": null,
    "show_guest_list": true,
    "start_at": "2025-07-30T00:00:00.000Z",
    "timezone": "America/Vancouver",
    "url": "u9o25j3g",
    "user_api_id": "usr-EnhJAE2EvQoXYcM",
    "visibility": "public",
    "waitlist_enabled": true,
    "virtual_info": {
      "has_access": false
    },
    "geo_address_info": {
      "city": "Vancouver",
      "type": "google",
      "region": "British Columbia",
      "address": "KPMG Vancouver",
      "country": "Canada",
      "place_id": "ChIJrU6fCYJxhlQRvQNxZpsdUh0",
      "city_state": "Vancouver, British Columbia",
      "description": "12th Floor",
      "country_code": "CA",
      "full_address": "KPMG Vancouver, 777 Dunsmuir St 11th Floor, Vancouver, BC V7Y 1K3, Canada",
      "apple_maps_place_id": "IE42E01A6C56E1BD5",
      "mode": "shown"
    },
    "geo_address_visibility": "public",
    "coordinate": {
      "longitude": -123.1169468,
      "latitude": 49.2839987
    }
  },
  "cover_image": {
    "vibrant_color": null,
    "colors": [
      "#130f95",
      "#f0eef0",
      "#bc9989",
      "#40342d"
    ]
  },
  "calendar": {
    "access_level": "public",
    "api_id": "cal-3uVd6qhBGAwEXbX",
    "avatar_url": "https://images.lumacdn.com/calendars/ia/32050084-f885-4844-873e-f31d3c9b6fa4.png",
    "coordinate": {
      "longitude": -123.120738,
      "latitude": 49.282729
    },
    "cover_image_url": "https://images.lumacdn.com/calendar-cover-images/kb/5fab0a95-0b10-408f-b205-c9b80c3b9fd1.jpg",
    "description_short": "",
    "event_submission_restriction": "none",
    "geo_city": "Vancouver",
    "geo_country": "Canada",
    "geo_region": "British Columbia",
    "google_measurement_id": null,
    "instagram_handle": null,
    "launch_status": "launched",
    "linkedin_handle": "/showcase/womenintech-canada",
    "luma_plus_active": false,
    "meta_pixel_id": null,
    "name": "WOMEN IN TECH® Canada | BC",
    "personal_user_api_id": null,
    "refund_policy": null,
    "slug": "witcanada",
    "social_image_url": null,
    "stripe_account_id": "acct_1RAz7vCpwjXoz92E",
    "tax_config": null,
    "tiktok_handle": null,
    "timezone": "America/Vancouver",
    "tint_color": "#F31A7C",
    "track_meta_ads_from_luma": false,
    "twitter_handle": null,
    "verified_at": null,
    "website": "https://women-in-tech.org/",
    "youtube_handle": null,
    "is_personal": false
  },
  "start_at": "2025-07-30T00:00:00.000Z",
  "hosts": [
    {
      "api_id": "usr-EnhJAE2EvQoXYcM",
      "avatar_url": "https://images.lumacdn.com/avatars/m4/770f0aa0-6ea4-4ce4-ac83-cc0c580e8fd8.png",
      "bio_short": "Head of BC @ Women in Tech Canada",
      "instagram_handle": null,
      "last_online_at": "2025-07-19T18:55:06.519Z",
      "linkedin_handle": "/in/bibschan",
      "name": "Bibiana Souza",
      "tiktok_handle": null,
      "timezone": "America/Vancouver",
      "twitter_handle": null,
      "username": "bibschan",
      "website": null,
      "youtube_handle": "",
      "access_level": "manager",
      "event_api_id": "evt-dsEhvtZND6Xq0pm"
    }
  ],
  "guest_count": 53,
  "ticket_count": 53,
  "ticket_info": {
    "price": null,
    "is_free": false,
    "max_price": null,
    "is_sold_out": false,
    "spots_remaining": 87,
    "is_near_capacity": false,
    "require_approval": true,
    "currency_info": null
  },
  "featured_guests": [
    {
      "api_id": "usr-VXFiHej61l9LD6A",
      "avatar_url": "https://images.lumacdn.com/avatars/qn/fd7e7c7b-334e-4807-8f3b-b57f252e2237",
      "bio_short": null,
      "instagram_handle": null,
      "last_online_at": "2025-07-19T14:52:39.618Z",
      "linkedin_handle": "/in/ashu-garg-310585163",
      "name": "Ashu Garg",
      "tiktok_handle": null,
      "timezone": "America/Vancouver",
      "twitter_handle": null,
      "username": null,
      "website": null,
      "youtube_handle": null
    },
    // ... more guests
  ],
  "role": null,
  "calendar_api_id": "cal-zWMR9kayN3xtYsd",
  "is_manager": false,
  "platform": "luma",
  "status": "approved",
  "submitted_by_user_api_id": "usr-EnhJAE2EvQoXYcM",
  "coordinate": null,
  "tags": []
}
*/


const VAN_TIMEZONE = 'America/Vancouver';

const eventsData = eventsDataRaw.entries.map((event) => {  
  const startAt = new Date(event.event.start_at);
  const endAt = new Date(event.event.end_at);
  return {
    lumaId: event.event.api_id,
    startDate: formatInTimeZone(startAt, VAN_TIMEZONE, 'yyyy-MM-dd'),
    startTime: formatInTimeZone(startAt, VAN_TIMEZONE, 'h:mm a'),
    endDate: formatInTimeZone(endAt, VAN_TIMEZONE, 'yyyy-MM-dd'),
    endTime: formatInTimeZone(endAt, VAN_TIMEZONE, 'h:mm a'),
    startAtUtc: event.event.start_at,
    endAtUtc: event.event.end_at,
    title: event.event.name,
    cost: event.price || 0,
    location: {
      address: event.event.geo_address_info.full_address,
      name: event.event.geo_address_info.address,
      longitude: event.event.coordinate.longitude,
      latitude: event.event.coordinate.latitude,
    },
    url: `https://lu.ma/${event.event.url}`,
  };
});

fs.writeFileSync('events.json', JSON.stringify(eventsData, null, 2));