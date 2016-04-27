/**
 * Created by Nikith_Shetty on 08/04/2016.
 */
var mongoose = require('mongoose');


//connect to DB
mongoose.connect("mongodb://localhost:27017/newDB", function (err) {
    if(err) console.log("Error connecting to DB server : " + err);
    else {
        console.log("Connected to DB");
    }
});

module.exports = mongoose;