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

// get timeSlots1InLecHallInDay
exports.timeSlots1InLecHallInDay =  (req, res) => {
    TimeSlot.find({'hallName': req.body.hallName,'lecDate': req.body.lecDate,'timeSlotID':"1"}).select('-__v').then(itemInfos => {
        res.status(200).json(itemInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
}

// get timeSlots2InLecHallInDay
exports.timeSlots2InLecHallInDay =  (req, res) => {
    TimeSlot.find({'hallName': req.body.hallName,'lecDate': req.body.lecDate,'timeSlotID':"2"}).select('-__v').then(itemInfos => {
        res.status(200).json(itemInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
}

// get timeSlots3InLecHallInDay
exports.timeSlots3InLecHallInDay =  (req, res) => {
    TimeSlot.find({'hallName': req.body.hallName,'lecDate': req.body.lecDate,'timeSlotID':"3"}).select('-__v').then(itemInfos => {
        res.status(200).json(itemInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
}

// get timeSlots4InLecHallInDay
exports.timeSlots4InLecHallInDay =  (req, res) => {
    TimeSlot.find({'hallName': req.body.hallName,'lecDate': req.body.lecDate,'timeSlotID':"4"}).select('-__v').then(itemInfos => {
        res.status(200).json(itemInfos);
    }).catch(error => {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    });
}


exports.updateTimeSlotsInLecHallInDay = (req, res) => {

    TimeSlot.findOneAndUpdate(
        { hallName: req.body.hallName, lecDate: req.body.lecDate, timeSlotID: req.body.timeSlotID },
        {
            status: req.body.status,
        },
        {new: true}
    ).select('-__v')
        .then(item => {
            if(!item) {
                return res.status(404).send({
                    message: "Error -> Can NOT update a order with id = " + req.params.id,
                    error: "Not Found!"
                });
            }

            res.status(200).json(item);
        }).catch(err => {
        return res.status(500).send({
            message: "Error -> Can not update a order with id = " + req.params.id,
            error: err.message
        });
    });
}
