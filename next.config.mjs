/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
  
    images: {
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },

    compiler: {
      relay: {
        src: './',
        artifactDirectory: './__generated__',
        language: 'typescript',
        eagerEsModules: false,
        styledComponents: true,
      },
    },

};

export default nextConfig;