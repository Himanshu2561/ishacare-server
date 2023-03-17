const QuestionModel = require('../models/Question')
const AnswerModel = require('../models/Answer')
const ErrorResponse = require('../utils/errorResponse')

exports.postQuestion = async (req, res, next) => {
  const { question, user } = req.body

  if (!question || !user) {
    return next(new ErrorResponse('Please provide data', 400))
  }

  try {
    await QuestionModel.create({
      user,
      question,
    })
    res.status(201).send({
      status: true,
      message: 'posted Question',
    })
  } catch (error) {
    next(error)
  }
}

exports.getForumData = async (req, res, next) => {
  try {
    await QuestionModel.aggregate([
      {
        $lookup: {
          from: 'answermodels',
          localField: '_id',
          foreignField: 'questionId',
          as: 'allAnswers',
        },
      },
    ])
      .exec()
      .then((doc) => {
        res.status(200).send(doc)
      })
      .catch((error) => {
        res.status(404).send({
          status: false,
          message: 'unable to get question',
        })
      })
  } catch (error) {
    next(error)
  }
}

exports.postAnswer = async (req, res, next) => {
  const { answer, questionId, user } = req.body

  if (!answer) {
    return next(new ErrorResponse('Please provide data', 400))
  }

  try {
    await AnswerModel.create({
      user,
      answer,
      questionId,
    })
    res.status(201).send({
      status: true,
      message: 'posted Answer',
    })
  } catch (error) {
    next(error)
  }
}
