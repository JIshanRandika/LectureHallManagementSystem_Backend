const mongoose = require('mongoose');

const lecHallSchema = mongoose.Schema({
    hallName: String,

});

module.exports = mongoose.model('lecHall', lecHallSchema);
