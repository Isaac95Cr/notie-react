const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    id: String,
    name: String,
    lastName: String,
    pictureUrl: String,
    notebooks: Array,
    tags: Array,
    notes: Array
});

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel; 