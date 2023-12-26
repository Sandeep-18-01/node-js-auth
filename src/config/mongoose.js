//  const mongoose = require("mongoose");
//  require("dotenv").config()

//  mongoose.connect(process.env.db)
//      .then(() => { console.log('database conected successfully') })
//      .catch((error) => { console.log('not connected database') })

const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log("not connected to the database", error.message);
  });
