const app = require('./app')
const port = process.env.PORT || 3333
app.listen(port, () => console.log(`Сервер запущен, порт:${port}`))

/*
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Работает'
    })
})*/


