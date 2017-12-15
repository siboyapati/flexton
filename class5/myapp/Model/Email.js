var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var EmailListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    company: String,
    time: {
        type: Date,
        default: Date.now
    }
});

var EmailSchema = mongoose.model('EmailSchema', EmailListSchema);
module.exports = EmailSchema;