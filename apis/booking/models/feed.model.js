const mongoose = require('../../../common/services/mongoose.service').mongoose;

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String},
    imageUrl1: {type: String},
    thumbnailUrl1: {type: String},
    mediaType1: {type: String},
    userId: {type: String},
    createdOn: {type: String},
    timeStamp: {type: String},
    imageUrl1Width: {type: String},
    distinctViews: {type: Array},
    totalViews: {type: Array},
    comments: {type: Array},
    mentionedUsers: {type: Array},
    imageUrl1Height: {type: String},
    imageUrl1Width: {type: String},
    likesCount: {type: String},
    postStatus: {type: String},
    shareCount: {type: String},
    commentCount: {type: String},
    cloudinary_public_id: {type: String},
    userName: {type: String},
    lastName: {type: String},
    firstName: {type: String},
    fullName: {type: String},
    fullNameWithSpace: {type: String},
    profilepic: {type: String},
    profileCoverImage: {type: String},
    channelId: {type: String},
    channelImageUrl: {type: String},
    channelName: {type: String},
    channelStatus: {type: String},
    categoryId: {type: String},
    categoryName: {type: String},
    categoryUrl: {type: String},
    musicId: {type: String},
    musicData: {type: Array},
    location: {type: Array},
    place: {type: String},
    countrySname: {type: String},
    city: {type: String},
    placeId: {type: String},
    likes: {type: Array},
    orientation: {type: String},
    distinctViewsCount: {type: String},
    totalViewCount: {type: String},
    trending_score: {type: String}, 
    isPrivate: {type: String}, 
});


const Feed = mongoose.model('post', postSchema);





exports.getFeed = (limit, page_no) => {
    return new Promise((resolve, reject) => {
        
        Feed.find({}).skip((limit * page_no) - limit).limit(limit)              // Same as before, always use 'skip' first.limit(PAGE_SIZE)
            .exec(function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            })
    });
};


