const mongoose = require('../../../common/services/mongoose.service').mongoose;

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    type: {type: String},
    user_id: {type: String},
    payment_method: {type: String},
    txt_id: {type: String},
    from_date:{type: String}, 
    to_date:{type: String}, 
    from_time:{type: String}, 
    to_time:{type: String}, 
    pick_up_loc:{type: String}, 
    drop_loc:{type: String}, 
    pick_up_loc_lat:{type: String}, 
    pick_up_loc_long:{type: String}, 
    drop_loc_long:{type: String}, 
    deposite:{type: String}, 
    booking_title:{type: String}, 



    check_in_date:{type: String}, 
    check_in_time:{type: String}, 
    rent:{type: String}, 
    extra:{type: String}, 
    no_of_guests:{type: String}, 



    order_id:{type: String}, 
    createdAt:{type: String},
    status:{type: String}
});


const Booking = mongoose.model('tbl_booking', bookingSchema);


exports.CreateBooking = (Data) => {
     Data.createdAt =  new Date().toISOString();
     Data.order_id =  'Hal-'+Date.now();
     Data.status =  'Pending';
     
     const bookingSave = new Booking(Data);
     return bookingSave.save();
};


exports.BookingUpcomingPast = (status, user_id) => {
    return new Promise((resolve, reject) => {
        Booking.find({
              $and : [
                       { 
                         "status":status
                       },
                       { 
                         "user_id":user_id
                       }
                     ]
            })
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            })
    });
};

exports.BookingById = (booking_id) => {
    return new Promise((resolve, reject) => {
        Booking.find({_id:booking_id})
            .exec(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
    });
};


