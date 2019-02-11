const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('bot', schema);