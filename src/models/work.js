const mongoose = require('../db/mongo');

const WorkSchema = mongoose.Schema(
    {
        title: String,
        components: Object
    },
    { timeStamps: true }
);

const WorkModel = mongoose.model('work', WorkSchema);

module.exports = { WorkModel };
