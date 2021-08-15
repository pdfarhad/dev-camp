const Bootcamp = require('../models/Bootcamp');

exports.getBootcamps = (req, res, next) => {
    res
        .status(200)
        .json({
            success: true,
            msg: "Show all bootcamps"
        });
}
exports.getBootcamp = (req, res, next) => {
    res
        .status(200)
        .json({
            success: true,

            msg: `Show bootcamp ${req.params.id}`
        });
}
exports.createBootcamp =  async (req, res, next) => {
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