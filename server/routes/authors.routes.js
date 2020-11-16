const AuthorController = require("../controllers/authors.controllers");

module.exports = app => {
    //Get ALL
    app.get("/api/authors", AuthorController.findAllAuthors);
    //Get ONE
    app.get("/api/authors/:_id", AuthorController.findOneAuthor);
    //Create ONE
    app.post("/api/authors/new", AuthorController.createAuthor);
    //Delete ONE
    app.delete("/api/authors/delete/:_id", AuthorController.deleteAuthor);
    //Update ONE
    app.put("/api/authors/update/:_id", AuthorController.updateAuthor);
}
