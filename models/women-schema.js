var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var womenSchema = new Schema({
    name: String,
    category: [{
        type: String,
        enum: ["Music", "Tech"]
    }],
    subcategoryMus: String,
    subcategoryTech: String,
    company: String,
    bio: String,
    socialMedia: [String],
    contact: String,
    like: {
        type: Number,
        default: 0
    },
    comments: [String],
    imgUrl: String
})

var Women = mongoose.model('Women', womenSchema);

module.exports = Women;