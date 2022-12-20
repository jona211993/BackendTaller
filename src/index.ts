import app from "./app";
import { DatabaseSource } from "./database/index";

const main = async () => {
  await DatabaseSource.initialize();

  

  app.listen(app.get("port"));
  console.log("Servidor en puerto", app.get("port"));
};

main();
