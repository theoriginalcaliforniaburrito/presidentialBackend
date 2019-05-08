const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;

const presidentSchema = new Schema({
    number: {
        type: Number
    },

    start: {
        type: String
    },

    end: {
        type: String
    },

    born: {
        type: String
    },

    died: {
        type: String
    },

    name: {
        type: String
    },

    terms: {
        type: Number
    },

    prior: {
        type: String
    },

    party: {
        type: String
    },

    vice: {
        type: String
    },

    state: {
        type: String
    },

    home: {
        type: String
    },

    spouse: {
        type: String
    },

    portrait: {
        type: String
    },

    assassinated: {
        type: Boolean
    }
})

var President = mongoose.model('President', presidentSchema)

module.exports = President;