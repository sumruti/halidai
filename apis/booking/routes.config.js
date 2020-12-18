const BookingController = require('./controllers/booking.controller');
const CheckParam = require('./validate-param');
const config = require('../../common/config/env.config');


exports.routesConfig = function (app) {

    app.post('/api/booking', [
        //ValidationMiddleware.validJWTNeeded,
    	CheckParam.validate_param,
        BookingController.Booking
    ]);

    app.get('/api/booking/upcoming/:userId', [
        //ValidationMiddleware.validJWTNeeded,
        BookingController.BookingUpcoming
    ]);

    app.get('/api/booking/past/:userId', [
        //ValidationMiddleware.validJWTNeeded,
        BookingController.BookingPast
    ]);

    app.get('/api/booking-by-id/:booking_id', [
        //ValidationMiddleware.validJWTNeeded,
        BookingController.BookingById
    ]);
  

    app.post('/api/booking-by-id/:booking_id', [
        //ValidationMiddleware.validJWTNeeded,
    	CheckParam.validate_param,
        BookingController.Booking
    ]);




   
};
