module.exports = {
  siteUrl: "https://stanrelaksu.pl",
  generateRobotsTxt: true, // (Opcjonalne) generowanie pliku robots.txt
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/private/*", "/privacy-policy/*", "/terms/*"],
  additionalPaths: async (config) => {
    const lastmodDate = new Date().toISOString();
    return [
      {
        loc: "https://stanrelaksu.pl/", // URL Twojej strony głównej
        lastmod: lastmodDate,
      },
    ];
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  },
};
