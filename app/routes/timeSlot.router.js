const timeSlots = require("../controllers/timeSlot.controller.js");

module.exports = function(app) {

    app.post('/api/addATimeSlot', timeSlots.addATimeSlot);
    app.get('/api/getTimeSlots', timeSlots.timeSlots);
    app.post('/api/timeSlots1InLecHallInDay', timeSlots.timeSlots1InLecHallInDay);
    app.post('/api/timeSlots2InLecHallInDay', timeSlots.timeSlots2InLecHallInDay);
    app.post('/api/timeSlots3InLecHallInDay', timeSlots.timeSlots3InLecHallInDay);
    app.post('/api/timeSlots4InLecHallInDay', timeSlots.timeSlots4InLecHallInDay);
    app.put('/api/updateTimeSlotsInLecHallInDay', timeSlots.updateTimeSlotsInLecHallInDay);


}

