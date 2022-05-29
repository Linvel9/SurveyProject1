const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SurveySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    QType1: {
                type: String,
                default: ''
            },
    QType2: {
                type: String,
                default: ''
            },
    QType3: {
                type: String,
                default: ''
            }
})

module.exports = mongoose.model('surveys', SurveySchema)