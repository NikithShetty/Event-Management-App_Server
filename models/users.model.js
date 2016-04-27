/**
 * Created by Nikith_Shetty on 06/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    name: {
        firstName: String,
        lastName: String
    },
    phno: Number,
    email: String,
    date_created: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('user',usersSchema);
