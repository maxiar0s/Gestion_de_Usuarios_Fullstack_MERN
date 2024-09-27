const mongoose = require("mongoose");

// cadena de conexion

const URI = process.env.MONGODB_URI;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((error) => console.error("Error de conexión:", error));
/*
mongoose.connect(URI);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("base de datos conectada: ", URI);
}); 
*/
