//Dto
const groupDto = require("../../model/dto/group.dto")

exports.createGroup = (req, res, next) => {
    let group = {
        course_id: req.body.course_id,
        period_id: req.body.period_id,
        teacher_id: req.body.teacher_id,
        number: req.body.number
    }
    groupDto.create(group, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
    })
}

exports.updateGroup = (req, res, next) => {
    let group = {
        course_id: req.body.course_id,
        period_id: req.body.period_id,
        teacher_id: req.body.teacher_id,
        number: req.body.number
    }
    groupDto.update({ _id: req.body.id }, group, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(201).json({
            info: data
        })
    })
}

exports.getAll = (req, res, next) => {
    groupDto.getAll({},(err, data) => {
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

exports.deleteGroup = (req, res, next) => {
    groupDto.delete({_id: req.body.id},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json()
    })
}