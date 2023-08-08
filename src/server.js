const app = require("./app");

const { db } = require("./database/config");
db.authenticate()
  .then(() => {
    console.log("Conexión establecida correctamente");
    db.sync()
      .then(() => console.log("Base de datos sincronizada correctamente"))
      .catch((err) =>
        console.log("No se pudo sincronizar la base de datos", err)
      );
  })
  .catch((err) => console.log("No se pudo conectar a la base de datos", err));

db.sync()
  .then(() => console.log("Base de datos sincronizada correctamente"))
  .catch((err) => console.log("No se pudo sincronizar la base de datos", err));

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
