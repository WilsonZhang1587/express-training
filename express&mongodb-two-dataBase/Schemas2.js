//Require Mongoose
var mongoose = require('mongoose');

var conn2 = mongoose.createConnection('mongodb://192.168.205.15:27017/testt',{useNewUrlParser: true, useUnifiedTopology: true})

//Define a schema
var SomeModelSchema = new mongoose.Schema(
    {
        vvv: String
    },
    { versionKey: false }
);

module.exports = conn2.model('testt01', SomeModelSchema );