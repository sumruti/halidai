const FeedModel = require('../models/feed.model');



exports.getFeed = (req, res) => {
	 try{
	 	   const limit = parseInt(req.params.limit); // Make sure to parse the limit to number
           const skip = parseInt(req.params.page);
	 	   FeedModel.getFeed(limit, skip)
	         .then((result) => {
	            return res.send({status:true, result:result});
	        })

	 }catch(err){
	 	   return res.send({status:false, message: "Something went wrong please try again"});

	 }

          
    
};









