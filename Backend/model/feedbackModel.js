const mongoose = require('mongoose');
const feedbackSchema=mongoose.Schema({
    name: String,
    duration: String,
    comments: String,
    rating: String,
})
const Feedback = mongoose.model('feedback', feedbackSchema);
module.exports=Feedback;