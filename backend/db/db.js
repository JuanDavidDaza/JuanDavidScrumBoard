const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    //con process va al archivo .env y me trae la variable de la conexión BD_CONNECTION
    await mongoose.connect(process.env.BD_CONNECTION, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
    console.log("Connection Mongo ON");
  } catch (e) {
    console.log("Error in connecting to MongoDB: ", e);
    throw new Error("Error in connecting to MongDB");
  }
};
//Exportar la función dbConnection 
module.exports = { dbConnection };
