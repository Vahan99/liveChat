const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || "mongodb://localhost/test-db",
  env: process.env.NODE_ENV || "development",
  tokens: {
    access: {
      type: 'access',
      expiresIn: '2m',
      secret: process.env.ACCESS_TOKEN_SECRET
    },
    refresh: {
      type: 'refresh',
      expiresIn: '3m',
      secret: process.env.REFRESH_TOKEN_SECRET
    }
  }
};

module.exports = config;
