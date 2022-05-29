const Survey = require('../models/survey-model')
const errorHandler = require('../utils/ErrorHandler')

module.exports.create = async function(req, res) {
    try {
    const survey = await new Survey({
        name: req.body.name,
        QType1: req.body.QType1,
        QType2: req.body.QType2,
        QType3: req.body.QType3,
    }).save()
    res.status(201).json(survey)
} catch (e) {
    errorHandler(res, e)
}
    
}

module.exports.getByID = async function(req, res) {
    try{
        const survey = await Survey.find({
            surveys: req.params.SurveysId
        })
        res.status(200).json(survey)
    } catch (e) {
        errorHandler(res, e)
    }
}