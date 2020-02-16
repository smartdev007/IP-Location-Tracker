

const mongoose = require('mongoose');

//chat messages
const ipSchema = new mongoose.Schema({

    ip:{ type: String, default: '' },
    country:{ type: String, default: '' },
    city:{   type: String, default:''},
    lang:{   type: Number, default:0.00},
    lat:{   type: Number, default:0.00},
    date: {type:Date,default: Date.now()}
    });



var ipModel = mongoose.model('iprecords', ipSchema);


module.exports = {
    ipModel
};