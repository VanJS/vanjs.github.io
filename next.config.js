const { PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_EXPORT || phase === PHASE_PRODUCTION_BUILD) {
    return {
      output: "export",
      basePath: "/vanjs.github.io",
    };
  }

  return {};
};
