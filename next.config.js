
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Włącz analizę tylko wtedy, gdy ANALYZE jest ustawione
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true, // Twoja aktualna konfiguracja Next.js
  env: {
    HOMEPL_USER: "kontakt+stanrelaksu_pl.serwer2422207",
    HOMEPL_PASS: "Kin900%StanRelaksu",
    CONTACT_FORM_TO_EMAIL: "kontakt@stanrelaksu.pl",
    SMTP_HOST: "serwer2422207.home.pl",
    SMTP_PORT: "25",
  },
});
