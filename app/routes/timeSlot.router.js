const timeSlots = require("../controllers/timeSlot.controller.js");

module.exports = function(app) {

    app.post('/api/addATimeSlot', timeSlots.addATimeSlot);
    app.get('/api/getTimeSlots', timeSlots.timeSlots);


}

