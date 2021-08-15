exports.getBootcamps = (req,res, next) =>{
    res
        .status(200)
        .json({
            success: true,
            msg: "Show all bootcamps"
        });
}
exports.getBootcamp = (req,res, next) =>{
    res
        .status(200)
        .json({
            success: true,
            msg: `Show bootcamp ${req.params.id}`
        });
}
exports.createBootcamp = (req,res, next) =>{
    res
        .status(200)
        .json({
            success: true,
            msg: "Create new bootcamp"
        });
}
exports.updateBootcamps = (req,res, next) =>{
    res
        .status(200)
        .json({
            success: true,
            msg: `Show bootcamp ${req.params.id}`
        });
}
exports.deleteBootcamps = (req,res, next) =>{
    res
        .status(200)
        .json({
            success: true,
            msg: `Show bootcamp ${req.params.id}`
        });
}