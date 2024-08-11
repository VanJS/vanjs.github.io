const nextConfig = (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  return {
    basePath: phase !== "phase-development-server" ? "/vanjs.github.io" : "",
  };
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   basePath: "/vanjs.github.io",
// };

// export default nextConfig;
