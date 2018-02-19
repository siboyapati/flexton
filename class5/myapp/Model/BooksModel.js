var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var BooksListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

var BooksSchema = mongoose.model('Books', BooksListSchema);
module.exports = BooksSchema;