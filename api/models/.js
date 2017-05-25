const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SomeSchema = new Schema({
  name: 'Juan',
  hobby: 'Extreme Jenga'
});

const SomeModel = mongoose.model('SomeModel', SomeSchema);
