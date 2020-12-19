const BookingController = require('./controllers/booking.controller');
const ProductController = require('./controllers/product.controller');
const FeedController = require('./controllers/feed.controller');
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

    app.get('/api/get-product/:type/:limit/:page', [
        //ValidationMiddleware.validJWTNeeded,
        ProductController.GetProduct
    ]);
  

   app.get('/api/feed/:limit/:page', [
        //ValidationMiddleware.validJWTNeeded,
        FeedController.getFeed
    ]);
  

    app.post('/api/booking-by-id/:booking_id', [
        //ValidationMiddleware.validJWTNeeded,
    	CheckParam.validate_param,
        BookingController.Booking
    ]);




   
};
