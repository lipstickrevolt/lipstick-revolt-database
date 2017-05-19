var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema ({
    name: String,
    date: {type: Date},
    startTime: {type: Date},
    endTime: {type:Date},
    category: [{
        type: String,
        enum: ["Music", "Tech"]
    }],
    subcategory: String,
    company: String,
    description: String,
    socialMedia: [String],
    contact: String,
    comments: [String],
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    imgUrl: String

})

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;