const BookingController = require('./controllers/booking.controller');
const ValidationMiddleware = require('../../common/middlewares/auth.validation.middleware');
const config = require('../../common/config/env.config');


exports.routesConfig = function (app) {

    app.post('/api/booking', [
        //ValidationMiddleware.validJWTNeeded,
    	//CheckParam.productParam,
        BookingController.Booking
    ]);




   
};
