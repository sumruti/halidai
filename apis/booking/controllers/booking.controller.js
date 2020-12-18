const BookingModel = require('../models/booking.model');



exports.Booking = (req, res) => {
	 try{
	 	   BookingModel.CreateBooking(req.body)
	         .then((result) => {
	         	console.log(result)
	            return res.send({status:true, message: 'Booking successful', order_id:result.order_id});
	        })

	 }catch(err){

	 	   return res.send({status:false, message: "Something went wrong please try again"});

	 }

          
    
};








