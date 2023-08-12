import mongoose, { Schema, model } from "mongoose";

const Exercise = new Schema({
  userName: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true
})

module.exports = mongoose.models.Exercise || model('Exercises', Exercise)