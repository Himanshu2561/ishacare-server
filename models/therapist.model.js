const mongoose = require('mongoose')

//Therapist
const therapistSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  Phone: Number,
  Experience: Number,
  // monitoringPatient: Patient,
})

const Therapist = mongoose.model('Therapist', therapistSchema)

module.exports = Therapist
