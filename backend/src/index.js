require("dotenv").config();
const app = require("./app");
require("./database");

// logica para ejecutar servidor

async function main() {
  await app.listen(app.get("port"));
  console.log("servidor ejecutandose en el puerto: ", app.get("port"));
}

main();
