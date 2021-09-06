//Dto
const student_groupDto = require("../../model/dto/student_group.dto")

exports.createStudentGroup = (req, res, next) => {
    let stdGroup = {
        student_id: req.body.student_id,
        group_id: req.body.group_id
    }
    student_groupDto.create(stdGroup, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
    })
}

exports.updateStudentGroup = (req, res, next) => {
    let stdGroup = {
        student_id: req.body.student_id,
        group_id: req.body.group_id
    }
    student_groupDto.update({ _id: req.body.id }, stdGroup, (err, data) => {
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
    student_groupDto.getAll({},(err, data) => {
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

exports.deleteStudentGroup = (req, res, next) => {
    student_groupDto.delete({_id: req.body.id},(err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json()
    })
}