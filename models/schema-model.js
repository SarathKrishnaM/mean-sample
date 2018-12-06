const mongoose = require('mongoose'),
    schema = mongoose.Schema,
    sampleSchema = new schema({
       TimeStamp: { type: String },
       name: { type: String },
       Parent: { type: String },
       children: { type: Array}
    });

const sample = mongoose.model('sample', sampleSchema);
module.exports = sample;