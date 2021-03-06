//Dto
const userDto = require("../../model/dto/user.dto")
const config = require("config")
const helper = require("../helpers/general.helper")

//Helper
const helper = require("../helpers/general.helper")
const notification = require("../helpers/notification.helper")

exports.login = (req, res, next) => {

    userDto.login({ username: req.body.username }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        if (data.length > 0) {
            let pass = helper.DecryptPassword(data[0].password)
            if (req.body.password === pass) {
                tk = helper.generateToken(data[0])
                return res.status(200).json(
                    {
                        token: tk
                    }
                )
            } else {
                return res.status(200).json({
                    info: data
                })
            }
        }
    })
}

exports.getAll = (req, res, next) => {
    userDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            info: data
        })
    })
}