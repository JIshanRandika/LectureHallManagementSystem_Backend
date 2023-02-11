const lecHalls = require("../controllers/lecHall.controller");

module.exports = function(app) {

    app.post('/api/addALecHall', lecHalls.addALecHall);
    app.get('/api/getLecHalls', lecHalls.lecHalls);


}

