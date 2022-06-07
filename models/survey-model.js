const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SurveySchema = new Schema({
    Survey: {
                type: String,
                required: ''
            },
})

module.exports = mongoose.model('surveys', SurveySchema)