const LecHall = require('../models/lecHall.model.js');

//add a lecHall

exports.addALecHall = (req, res) => {
    const lecHall = new LecHall({
        hallName: req.body.hallName,
    });
    console.log('run')
    // Save a order in the MongoDB
    lecHall.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};

//get all lecHalls
exports.lecHalls = (req, res) => {

    LecHall.find().select('-__v').then(itemInfos => {
        console.log('ishan');
        res.status(200).json(itemInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
};
