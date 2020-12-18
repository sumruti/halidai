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


exports.BookingUpcoming = (req, res) => {
	 try{
	 	   BookingModel.BookingUpcomingPast('Pending',req.params.userId)
	         .then((result) => {
	              return res.send({status:true, result:result});
	        })

	 }catch(err){

	 	   return res.send({status:false, message: "Something went wrong please try again"});

	 }

          
    
};



exports.BookingPast = (req, res) => {
	 try{
	 	   BookingModel.BookingUpcomingPast('Completed',req.params.userId)
	         .then((result) => {
	              return res.send({status:true, result:result});
	        })

	 }catch(err){

	 	   return res.send({status:false, message: "Something went wrong please try again"});

	 }

          
    
};

exports.BookingById = (req, res) => {
	 try{
	 	   BookingModel.BookingById(req.params.booking_id)
	         .then((result) => {
	              return res.send({status:true, result:result});
	        })

	 }catch(err){

	 	   return res.send({status:false, message: "Something went wrong please try again"});

	 }

          
    
};








