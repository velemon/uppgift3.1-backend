// work.js - Mongoose-modell för "Work" som definierar strukturen för arbetsrelaterade data i MongoDB
const mongoose = require("mongoose");

// Definierar ett schema för "Work" med fält för företag, roll, beskrivning och antal år
const workSchema = new mongoose.Schema({
  company: String,
  role: String,
  description: String,
  years: Number
});

// Exporterar modellen så att den kan användas i andra delar av applikationen, t.ex. i routes
module.exports = mongoose.model("Work", workSchema);