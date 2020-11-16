const Authors = require("../models/authors.model");

module.exports.findAllAuthors = (req,res) => {
    Authors.find()
        .then(allAuthors => res.json({authors: allAuthors}))
        .catch(err => res.json({message: "Something went wrong!",error: err}));
}

module.exports.findOneAuthor = (req,res) => {
    Authors.findOne({_id: req.params._id})
        .then(thisAuthor => res.json({authors: thisAuthor}))
        .catch(err => res.json({message: "Something went wrong!",error: err}));
}

module.exports.createAuthor = (req,res) => {
    Authors.create(req.body)
        .then(newAuthor => res.json({authors: newAuthor}))
        .catch(err => res.json({message: "Something went wrong?",error: err}));
}

module.exports.updateAuthor = (req,res) => {
    Authors.update({_id: req.params._id}, {
        $set: {
            name: req.body.name
        }
    })
        .then(allAuthors => res.json({authros: allAuthors}))
        .catch(err => res.json({message: "Something went wrong!",error: err}));
}


module.exports.deleteAuthor = (req,res) => {
    Authors.remove({_id:req.params._id})
        .then(res.json({message: "This Author no longer writes"}))
        .catch(err => res.json({message: "Something went wrong!",error: err}));
}