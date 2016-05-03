/**
 * Created by Nikith_Shetty on 08/04/2016.
 */
var mongoose = require('mongoose');
var isDevelopment = false;


console.log("Connecting to DB...");

if(isDevelopment){
  //Development environment
  console.log("Development environment.");
  var DBAddr = "mongodb://localhost:27017/newDB";
  mongoose.connect(DBAddr, function (err) {
      if(err) console.log("Error connecting to DB server : " + err);
      else {
          console.log("Connected to DB");
      }
  });
}else{
  //Production environment
  var DBAddr = "mongodb://nikith:newdb_mlab@ds015780.mlab.com:15780/eventmanagementdb";
  mongoose.connect(DBAddr, function (err) {
      if(err) console.log("Error connecting to DB server : " + err);
      else {
          console.log("Connected to DB");
      }
  });
}

module.exports = mongoose;
