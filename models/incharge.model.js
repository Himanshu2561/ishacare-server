const mongoose = require('mongoose')

//Incharge
const inchargeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  phone: Number,
  experience: Number,
  clinicsUnder: [
    {
      name: String,
    },
  ],
})

const Incharge = mongoose.model('Incharge', inchargeSchema)

module.exports = Incharge
