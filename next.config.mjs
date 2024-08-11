const nextConfig = (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  return {
    output: "export",
    images: { unoptimized: true },
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
