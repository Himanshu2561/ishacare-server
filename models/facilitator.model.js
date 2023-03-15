const mongoose = require('mongoose')
const PatientModel = require('./patient.model')

//Facilitator
const facilitatorSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  Phone: Number,
  Experience: Number,
  monitoringPatient: PatientModel,
})

const Facilitator = mongoose.model('Facilitator', facilitatorSchema)

module.exports = Facilitator
