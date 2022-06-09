const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AnswerSchema = new Schema({
    Answer: {
                type: String,
                required: ''
            },
})

module.exports = mongoose.model('answers', AnswerSchema)