// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/vanjs.github.io",
// };

// export default nextConfig;

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */

  const nextConfig = {
    basePath: phase !== "phase-development-server" ? "/vanjs.github.io" : "",
  };

  return nextConfig;
};
