const slugs = require("./src/data/OffersSlugss");

module.exports = {
  siteUrl: "https://stanrelaksu.pl",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/private/*", "/privacy-policy/*", "/terms/*"],
  additionalPaths: async (config) => {
    const lastmodDate = new Date().toISOString();

    return slugs.map((slug) => ({
      loc: `https://stanrelaksu.pl/oferta/${slug}`,
      lastmod: lastmodDate,
    }));
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
    ],
  },
};
