const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

exports.getBootcamps = async (req, res, next) => {
    const bootcamp = await Bootcamp.find()
    res
        .status(200)
        .json({
            success: true,
            data: bootcamp
        });
}
exports.getBootcamp = async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
        return res.status(400).json({
            success: false
        })
    }
    res
        .status(200)
        .json({
            success: true,

            msg: `Show bootcamp ${req.params.id}`
        });
}
exports.createBootcamp = async (req, res, next) => {
    console.log(req.body);
    const bootcamp = await Bootcamp.create(req.body);
    res
        .status(200)
        .json({
            success: true,
            data: bootcamp
            // msg: "Create new bootcamp"
        });
}
exports.updateBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `Show bootcamp ${req.params.id}`
        });
}
exports.deleteBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({
            success: true,
            msg: `Show bootcamp ${req.params.id}`
        });
}