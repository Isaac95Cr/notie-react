const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
    name: String
});

const TagModel = mongoose.model('Tag',TagSchema);

module.exports = TagModel;
