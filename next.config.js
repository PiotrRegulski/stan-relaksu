
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true', // Włącz analizę tylko wtedy, gdy ANALYZE jest ustawione
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true, // Twoja aktualna konfiguracja Next.js
 
});
module.exports = {
  allowedDevOrigins: ['http://192.168.1.49', 'http://localhost:3000']
};
