const mongoose = require('mongoose');

const timeSlotSchema = mongoose.Schema({
    hallName: String,
    lecDate: String,
    timeSlotID: String,
    lecturerName: String,
    subjectName: String,
    subjectID: String,
    status: String,

});

module.exports = mongoose.model('timeSlot', timeSlotSchema);
