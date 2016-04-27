/**
 * Created by Nikith_Shetty on 08/04/2016.
 */
var mongoose = require('mongoose');


//connect to DB
// mongoose.connect("mongodb://localhost:27017/newDB", function (err) {
//     if(err) console.log("Error connecting to DB server : " + err);
//     else {
//         console.log("Connected to DB");
//     }
// });

mongoose.connect("mongodb://nikith:newdb_mlab@ds015780.mlab.com:15780/eventmanagementdb", function (err) {
    if(err) console.log("Error connecting to DB server : " + err);
    else {
        console.log("Connected to DB");
    }
});

module.exports = mongoose;
