const mongoose = require('mongoose')

const ForumAnswerSchema = new mongoose.Schema({
  user: {
    type: String
  },
  answer: {
    type: String,
    maxlength: 300,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions", 
  },
  timePosted: {
    type: Date,
    default: Date.now(),
  },
})

const AnswerModel = mongoose.model('AnswerModel', ForumAnswerSchema)

module.exports = AnswerModel
