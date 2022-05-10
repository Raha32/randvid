const mongoose = require('mongoose');
const videosidSchema = new mongoose.Schema({
    videoID:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('videoID', videosidSchema);