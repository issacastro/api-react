require('dotenv').config();
import app from "./app";
require('./database');


//Main
async function main() {
  const port = app.get("port");
  await app.listen(port);
  console.log(`Server on port ${port}`);
}
//Starting Server
main();
