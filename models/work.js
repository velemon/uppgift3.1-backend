// work.js - Mongoose-modell för "Work" som definierar strukturen för arbetsrelaterade data i MongoDB
const mongoose = require("mongoose");

// Definierar ett schema för "Work" med fält för företag, roll, beskrivning och antal år
const workSchema = new mongoose.Schema({
  company: {
    // Fältet "company" är av typen String och krävs för att skapa en "Work" post
    type: String,
    // "required: true" innebär att detta fält måste fyllas i när en ny "Work" post skapas, annars kommer Mongoose att kasta ett valideringsfel
    required: true
  },
  role: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  years: {
    type: Number,
    required: true
  }
});

// Exporterar modellen så att den kan användas i andra delar av applikationen, t.ex. i routes
module.exports = mongoose.model("Work", workSchema);
