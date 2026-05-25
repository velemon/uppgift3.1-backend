// server.js - Huvudfilen för Express-applikationen som hanterar serverkonfiguration och databasanslutning
/* Importerar nödvändiga moduler: Express för att skapa servern, Mongoose för att hantera MongoDB-anslutningen, 
CORS för att hantera cross-origin requests, och dotenv för att ladda miljövariabler */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Skapar en Express-applikation
const app = express();

// Middleware för att hantera CORS och JSON-kroppar i inkommande requests
app.use(cors());
app.use(express.json());

// Importerar och använder routes för "work" API:et
const workRoutes = require("./routes/workRoutes");
app.use("/api/work", workRoutes);

// Ansluter till MongoDB med Mongoose och startar servern när anslutningen är framgångsrik
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Loggar att MongoDB är ansluten och startar servern på den port som anges i miljövariablerna
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log("Server running")
    );
  })
  // Loggar eventuella anslutningsfel till MongoDB
  .catch(err => console.log(err));