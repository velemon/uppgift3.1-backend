// workRoutes.js - Definierar API-routes för "work" resursen, inklusive CRUD-operationer
const express = require("express");
// Skapar en router-instans från Express
const router = express.Router();
// Importerar Mongoose-modellen för "Work" som används för att interagera med MongoDB
const Work = require("../models/Work");

// CREATE - Skapar en ny "work" post i databasen med data från request body
router.post("/", async (req, res) => {
    // Använder Mongoose-metoden create för att skapa en ny post och returnerar den skapade posten som JSON
  const data = await Work.create(req.body);
  res.json(data);
});

// READ ALL - Hämtar alla "work" poster från databasen
router.get("/", async (req, res) => {
    // Använder Mongoose-metoden find för att hämta alla poster och returnerar dem som JSON
  res.json(await Work.find());
});

// READ ONE - Hämtar en specifik "work" post baserat på dess ID
router.get("/:id", async (req, res) => {
    // Använder Mongoose-metoden findById för att hitta posten med det angivna ID:t och returnerar den som JSON
  res.json(await Work.findById(req.params.id));
});

// UPDATE - Uppdaterar en specifik "work" post baserat på dess ID med data från request body, och returnerar den uppdaterade posten
router.put("/:id", async (req, res) => {
    // Använder Mongoose-metoden findByIdAndUpdate för att uppdatera posten och returnerar den nya versionen av posten (new: true)
  res.json(await Work.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

// DELETE - Tar bort en specifik "work" post baserat på dess ID
router.delete("/:id", async (req, res) => {
    // Använder Mongoose-metoden findByIdAndDelete för att ta bort posten och returnerar ett meddelande om att den har tagits bort
  await Work.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Exporterar router-instansen så att den kan användas i server.js för att definiera API-routes
module.exports = router;