module.exports.login = function (req, res) {
    res.status(200).json({
        login: {
            email: req.body.email,
            passwod: req.body.password
        }
    })
}


module.exports.register = function (req, res) {
    res.status(200).json({
        register: 'login from controller'
    })
}