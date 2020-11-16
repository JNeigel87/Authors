const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authorsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Target Acquired!"))
    .catch(err => console.log("Target lost", err));