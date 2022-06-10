const express = require('express')
const controller = require('../controllers/answers')
const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.getByID)
router.delete('/', controller.remove)

module.exports = router