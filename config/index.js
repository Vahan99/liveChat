const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || "mongodb://localhost/test-db",
  env: process.env.NODE_ENV || "development"
};

module.exports = config;
