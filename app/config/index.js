const config = {
  app: {
    port: process.env.PORT || 3000,
    uri: "mongodb://127.0.0.1:27017/contactbook",
  },
};

module.exports = config;
