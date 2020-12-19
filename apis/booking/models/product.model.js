const mongoose = require('../../../common/services/mongoose.service').mongoose;

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {type: String},
    description: {type: String},
    type: {type: String},
    no_of_guests: {type: String},
    price: {type: String},
    booking_type: {type: String},
    pickup_location: {type: String},
    drop_off_location: {type: String},
    images_gallery: {type: String},
    availability: {type: String},
    is_booked: {type: String},
    is_published: {type: String},
    security_deposit: {type: String},
    over_all_rating: {type: String},
    createdon: {type: String},
    vendorId: {type: String},
    vendor_email: {type: String},
   
});


const Product = mongoose.model('product', productSchema);




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

exports.GetProduct = (type, limit, page_no) => {
    return new Promise((resolve, reject) => {
        var find ={};
        if(type != 'all'){
          find = {type:type}
        }
        Product.find(find).skip((limit * page_no) - limit).limit(limit) 
            .exec(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
    });
};


