

exports.validate_param = (req, res, next) => {

    console.log(req.body)
    let errors = [];
    if (req.body) {


        if(!req.body.type){
             return res.send({status:false, message: 'Missing type'});
        }


        console.log(req.body)


        if(req.body.type == "Car"){
             
                if(!req.body.user_id){

                     return res.send({status:false, message: 'Missing user_id'});

                }else if(!req.body.user_id){

                     return res.send({status:false, message: 'Missing user_id'});

                }else if(!req.body.payment_method){

                     return res.send({status:false, message: 'Missing payment_method'});

                }else if(!req.body.txt_id){

                     return res.send({status:false, message: 'Missing txt_id'});

                }else if(!req.body.from_date){

                     return res.send({status:false, message: 'Missing from_date'});

                }else if(!req.body.to_date){

                     return res.send({status:false, message: 'Missing to_date'});

                }else if(!req.body.from_time){

                     return res.send({status:false, message: 'Missing from_time'});

                }else if(!req.body.to_time){

                     return res.send({status:false, message: 'Missing to_time'});

                }else if(!req.body.pick_up_loc){

                     return res.send({status:false, message: 'Missing pick_up_loc'});

                }else if(!req.body.drop_loc){

                     return res.send({status:false, message: 'Missing drop_loc'});

                }else if(!req.body.pick_up_loc_lat){

                     return res.send({status:false, message: 'Missing pick_up_loc_lat'});

                }else if(!req.body.pick_up_loc_long){

                     return res.send({status:false, message: 'Missing pick_up_loc_lat'});

                }else if(!req.body.drop_loc_lat){

                     return res.send({status:false, message: 'Missing pick_up_loc_lat'});

                }else if(!req.body.drop_loc_long){

                     return res.send({status:false, message: 'Missing drop_loc_long'});

                }else if(!req.body.deposite){

                     return res.send({status:false, message: 'Missing deposite'});

                }
        }else if(req.body.type == "Yacht"){

              if(!req.body.user_id){

                     return res.send({status:false, message: 'Missing user_id'});

                }else if(!req.body.user_id){

                     return res.send({status:false, message: 'Missing user_id'});

                }else if(!req.body.payment_method){

                     return res.send({status:false, message: 'Missing payment_method'});

                }else if(!req.body.txt_id){

                     return res.send({status:false, message: 'Missing txt_id'});

                }else if(!req.body.check_in_date){

                     return res.send({status:false, message: 'Missing check_in_date'});

                }else if(!req.body.check_in_time){

                     return res.send({status:false, message: 'Missing check_in_time'});

                }else if(!req.body.rent){

                     return res.send({status:false, message: 'Missing rent'});

                }else if(!req.body.no_of_guests){

                     return res.send({status:false, message: 'Missing no_of_guests'});

                }

        }else if(req.body.type == "Helicopter"){

              if(!req.body.user_id){

                     return res.send({status:false, message: 'Missing user_id'});

                }else if(!req.body.user_id){

                     return res.send({status:false, message: 'Missing user_id'});

                }else if(!req.body.payment_method){

                     return res.send({status:false, message: 'Missing payment_method'});

                }else if(!req.body.txt_id){

                     return res.send({status:false, message: 'Missing txt_id'});

                }else if(!req.body.check_in_date){

                     return res.send({status:false, message: 'Missing check_in_date'});

                }else if(!req.body.check_in_time){

                     return res.send({status:false, message: 'Missing check_in_time'});

                }else if(!req.body.rent){

                     return res.send({status:false, message: 'Missing rent'});

                }else if(!req.body.no_of_guests){

                     return res.send({status:false, message: 'Missing no_of_guests'});

                }

        }

         return next();

       

      

       
       

        

         

       
    } else {
          return res.send({status:false, message:"Parameter missing"});
    }
};



