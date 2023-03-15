const mongoose = require('mongoose')

//Patient
const patientSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  age: Number,
  phone: Number,
  emergencyContact: Number,
  problem: String,
  duration: Number,
  //   attendingFacilitator: facilitatorSchema
})

const Patient = mongoose.model('Patient', patientSchema)
module.exports = Patient
