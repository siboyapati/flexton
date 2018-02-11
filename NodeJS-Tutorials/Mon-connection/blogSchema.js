var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true, unique: true},
    body: {type: String, required: true},
    comments: [{body: String, date: {type: Date, default: Date.now}}],
    date: {type: Date, default: Date.now},
    hidden: {type: Boolean, default: false},
    meta: {
        votes: Number,
        favs: Number
    }
});

var Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

