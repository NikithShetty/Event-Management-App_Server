/**
 * Created by Nikith_Shetty on 06/04/2016.
 */
var express = require('express');
var router = express.Router();
var userData = require('../models/users.model.js');


//init page
router.get('/', function(req, res, next) {
    res.send("Use /getData for user data dump");
});

/* user data sump */
router.get('/getData', function(req, res) {
    userData.find({},function (err, user) {
        if(err) res.send("Error fetching data");
        else res.json(user);
    });
});

//get selected user info
router.get('/getData/:name', function(req, res, next) {
    userData.find({"name.firstName":req.params.name},function (err, user) {
        if(err) res.send("Error fetching data");
        else if(user=='')res.send("No such user");
        else res.json(user);
    });
});
router.get('/getData/:name&:last', function(req, res, next) {
    userData.find({"name.firstName":req.params.name,"name.lastName":req.params.last},function (err, user) {
        if(err) res.send("Error fetching data");
        else if(user=='')res.send("No such user");
        else res.json(user);
    });
});

router.post('/saveData',function (req, res) {
   var newUser = new userData();
    newUser.name.firstName = req.body.firstName;
    newUser.name.lastName = req.body.lastName;
    newUser.phno = req.body.phno;
    newUser.email = req.body.email;

    //see whether user of same name exists
    userData.find({"name.firstName":newUser.name.firstName,"name.lastName":newUser.name.lastName},function (err, user) {
        if(err) res.send("Error fetching data");
        else if (user==""){
            newUser.save(function (err,event) {
                if(err)res.send("Error saving newUser : " + err);
                else {
                    res.json(event);
                }
            });
        }
        else res.json("userName already exists");
    });
});

module.exports = router;
