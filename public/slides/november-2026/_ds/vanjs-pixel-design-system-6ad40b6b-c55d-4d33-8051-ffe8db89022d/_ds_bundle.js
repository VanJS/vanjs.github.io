/* @ds-bundle: {"format":4,"namespace":"VanJSPixelDesignSystem_6ad40b","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"AgendaRow","sourcePath":"components/slides/AgendaRow.jsx"},{"name":"CodeBlock","sourcePath":"components/slides/CodeBlock.jsx"},{"name":"HudBar","sourcePath":"components/slides/HudBar.jsx"},{"name":"ImagePlate","sourcePath":"components/slides/ImagePlate.jsx"},{"name":"SpeakerCard","sourcePath":"components/slides/SpeakerCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"19ba9c11804a","components/core/Card.jsx":"15e35092efd9","components/core/Stat.jsx":"e64f0e86bf9e","components/core/Tag.jsx":"5805e39e6110","components/slides/AgendaRow.jsx":"90d97fbe34e1","components/slides/CodeBlock.jsx":"b6782ef83889","components/slides/HudBar.jsx":"eb36000e689f","components/slides/ImagePlate.jsx":"7238623de062","components/slides/SpeakerCard.jsx":"12b25907198d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VanJSPixelDesignSystem_6ad40b = window.VanJSPixelDesignSystem_6ad40b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  children,
  ...rest
}) {
  const cls = ['px-btn', variant === 'ghost' && 'px-btn--ghost', variant === 'quiet' && 'px-btn--quiet'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  kicker,
  title,
  children,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-card"
  }, kicker ? /*#__PURE__*/React.createElement("div", {
    className: "px-card__kicker"
  }, kicker) : null, title ? /*#__PURE__*/React.createElement("div", {
    className: "px-card__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("p", {
    className: "px-card__body"
  }, children) : null, footer);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function Stat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-stat__value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "px-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  tone = 'yellow',
  solid = false,
  children
}) {
  const tones = {
    yellow: '',
    blue: 'px-tag--blue',
    pink: 'px-tag--pink',
    green: 'px-tag--green'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: ['px-tag', tones[tone], solid && 'px-tag--solid'].filter(Boolean).join(' ')
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/slides/AgendaRow.jsx
try { (() => {
function AgendaRow({
  slot,
  title,
  meta,
  time
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-agenda"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-agenda__slot"
  }, slot), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "px-agenda__title"
  }, title), meta ? /*#__PURE__*/React.createElement("div", {
    className: "px-agenda__meta"
  }, meta) : null), time ? /*#__PURE__*/React.createElement("div", {
    className: "px-agenda__time"
  }, time) : null);
}
Object.assign(__ds_scope, { AgendaRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/AgendaRow.jsx", error: String((e && e.message) || e) }); }

// components/slides/CodeBlock.jsx
try { (() => {
function CodeBlock({
  filename = 'demo.js',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-code"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-code__bar"
  }, /*#__PURE__*/React.createElement("b", null), " ", filename), /*#__PURE__*/React.createElement("pre", null, children));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/slides/HudBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HudBar({
  items = [],
  pips,
  pipsOn = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-hud"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "px-hud__item",
    key: i
  }, it.label, " ", /*#__PURE__*/React.createElement("b", null, it.value))), pips ? /*#__PURE__*/React.createElement("span", {
    className: "px-hud__pips"
  }, Array.from({
    length: pips
  }).map((_, i) => /*#__PURE__*/React.createElement("i", _extends({
    key: i
  }, i < pipsOn ? {
    'data-on': ''
  } : {})))) : null);
}
Object.assign(__ds_scope, { HudBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/HudBar.jsx", error: String((e && e.message) || e) }); }

// components/slides/ImagePlate.jsx
try { (() => {
function ImagePlate({
  src,
  alt = '',
  hint = 'Vancouver pixel plate',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-plate",
    style: style
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("div", {
    className: "px-plate__hint"
  }, hint));
}
Object.assign(__ds_scope, { ImagePlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/ImagePlate.jsx", error: String((e && e.message) || e) }); }

// components/slides/SpeakerCard.jsx
try { (() => {
function SpeakerCard({
  name,
  role,
  src,
  hint = 'pixel portrait 132x132',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "px-speaker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-speaker__plate"
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("div", {
    className: "px-speaker__hint"
  }, hint)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "px-speaker__name"
  }, name), role ? /*#__PURE__*/React.createElement("div", {
    className: "px-speaker__role"
  }, role) : null, children));
}
Object.assign(__ds_scope, { SpeakerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/slides/SpeakerCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.AgendaRow = __ds_scope.AgendaRow;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.HudBar = __ds_scope.HudBar;

__ds_ns.ImagePlate = __ds_scope.ImagePlate;

__ds_ns.SpeakerCard = __ds_scope.SpeakerCard;

})();
