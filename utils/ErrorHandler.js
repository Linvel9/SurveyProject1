//универсальный обработчик ошибок
module.exports = (res, error) => {
    res.status(500).json({
        sucess: false,
        message: error.message ? error.message : error
})
}