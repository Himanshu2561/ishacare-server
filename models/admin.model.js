const mongoose = require('mongoose')

//Adimn
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
