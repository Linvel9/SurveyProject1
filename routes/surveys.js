const express = require('express')
const controller = require('../controllers/surveys')
const router = express.Router()

router.post('/', controller.create)
router.get('/', controller.getByID)
router.delete('/:id', controller.remove)

module.exports = router