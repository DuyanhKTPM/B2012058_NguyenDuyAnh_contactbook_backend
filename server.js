const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await MongoDB.connect(config.app.uri);
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    console.log(`Cannot connect to the database on ${PORT}`);
  }
};
startServer();
