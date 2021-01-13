//Require Mongoose
var mongoose = require('mongoose');

var conn = mongoose.createConnection('mongodb://192.168.205.15:27017/test',{useNewUrlParser: true, useUnifiedTopology: true})

//Define a schema
var SomeModelSchema = new mongoose.Schema(
    {
        name: String,
        msg: String
    },
    { versionKey: false }
);

module.exports = conn.model('test01', SomeModelSchema );