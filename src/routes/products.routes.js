const express = require("express");

const repairsController = require("../controllers/repairs.controllers.js");
const clientsController = require("../controllers/clients.controllers.js");

const router = express.Router();

// Rutas para las reparaciones
router
  .route("/repairs")
  .get(repairsController.findRepairs)
  .post(repairsController.createRepair);

router
  .route("/repairs/:id")
  .get(repairsController.findRepair)
  .put(repairsController.updateRepair)
  .delete(repairsController.deleteRepair);

// Rutas para los clientes
router
  .route("/")
  .get(clientsController.FindClients)
  .post(clientsController.createClient);

router
  .route("/:id")
  .get(clientsController.FindClient)
  .patch(clientsController.updatedClient)
  .delete(clientsController.deleteClient);

module.exports = router;
