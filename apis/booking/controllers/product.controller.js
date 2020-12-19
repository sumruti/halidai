const ProductModel = require('../models/product.model');



exports.GetProduct = (req, res) => {
	 try{
	 	   const limit = parseInt(req.params.limit); // Make sure to parse the limit to number
           const skip = parseInt(req.params.page);
	 	   ProductModel.GetProduct(req.params.type, limit, skip)
	         .then((result) => {
	         	console.log(result)
	            return res.send({status:true, result:result});
	        })

	 }catch(err){
         console.log(err)
	 	   return res.send({status:false, message: "Something went wrong please try again"});

	 }

          
    
};









