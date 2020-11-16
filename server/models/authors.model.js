const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Blank is not an author"],
        minlength: [3, "Name must be 3 characters or longer"]
    }
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorsSchema);

module.exports = Author;