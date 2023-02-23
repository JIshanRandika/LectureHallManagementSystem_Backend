const TimeSlot = require('../models/timeSlot.model.js');

//add a timeSlot

exports.addATimeSlot = (req, res) => {
    const timeSlot = new TimeSlot({
        hallName: req.body.hallName,
        lecDate: req.body.lecDate,
        timeSlotID: req.body.timeSlotID,
        lecturerName: req.body.lecturerName,
        subjectName: req.body.subjectName,
        subjectID: req.body.subjectID,
        status: req.body.status,
    });
    console.log('run')
    // Save a order in the MongoDB
    timeSlot.save().then(data => {
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({
            message: "Fail!",
            error: err.message
        });
    });
};

//get all timeSlots
exports.timeSlots = (req, res) => {

    TimeSlot.find().select('-__v').then(itemInfos => {
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
