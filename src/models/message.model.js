const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const schema = new Schema({
    id: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    conversationId: {
        type: String,
        required: true,
        index: true,
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('message', schema);