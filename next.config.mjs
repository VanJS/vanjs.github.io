const nextConfig = (phase) => {
  /**
   * @type {import('next').NextConfig}
   */
  return {
    output: "export",
    images: { unoptimized: true },
    // basePath: "/vanjs.github.io",
  };
};

export default nextConfig;
