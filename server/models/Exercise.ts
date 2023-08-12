import mongoose, { Schema, model } from "mongoose";

const ExerciseSchema = new Schema({
  userName: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true
});

const ExerciseModel = mongoose.models.Exercise || model('Exercise', ExerciseSchema);

export default ExerciseModel;
