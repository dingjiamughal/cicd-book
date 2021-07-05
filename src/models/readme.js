const mongoose = require('../db/mongo');

const ReadmeSchema = mongoose.Schema(
    {
        overviews: Array,
        todos: Array
    },
    { timeStamps: true }
);

const ReadmeModel = mongoose.model('Readme', ReadmeSchema);

module.exports = { ReadmeModel };
