const express = require('express')
const router = express.Router()

const {
  postQuestion,
  getForumData,
  postAnswer,
} = require('../controllers/forum')

router.route('/getForumData').get(getForumData)
router.route('/postQuestion').post(postQuestion)
router.route('/postAnswer').post(postAnswer)

module.exports = router
