const BookingController = require('./controllers/booking.controller');
const CheckParam = require('./validate-param');
const config = require('../../common/config/env.config');


exports.routesConfig = function (app) {

    app.post('/api/booking', [
        //ValidationMiddleware.validJWTNeeded,
    	CheckParam.validate_param,
        BookingController.Booking
    ]);




   
};
