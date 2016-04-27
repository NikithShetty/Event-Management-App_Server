/**
 * Created by Nikith_Shetty on 08/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventsSchema = new Schema({
    eventName: String,
    college: String,
    fee: Number,
    date : {
        type: Date
    },
    details: String,
    venue: {
        streetAddr: String,
        Area: String,
        City: String,
        State: String,
        Pincode: Number
    }
    // cord_info: [{
    //     type: users,
    //     ref: './users.model'
    // }],
    // sub_events: {
    //     type: events,
    //     ref: this
    // }
});
module.exports = mongoose.model('event',eventsSchema);

