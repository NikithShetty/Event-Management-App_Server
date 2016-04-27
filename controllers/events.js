/**
 * Created by Nikith_Shetty on 08/04/2016.
 */
var express = require('express');
var router = express.Router();
var eventData = require('../models/events.model');

//init page
router.get('/', function(req, res, next) {
    res.send("Use /getData for event data dump");
});

/* user data sump */
router.get('/getData', function(req, res, next) {
    eventData.find({},function (err, user) {
        if(err) res.send("Error fetching data");
        else res.json(user);
    });
});

//event data dump
router.get('/getData/single', function(req, res) {
    eventData.find({}).limit(1).execute(function (err, user) {
        if(err) res.send("Error fetching data");
        else res.json(user);
    });
});

//get searched event info
router.get('/getData/:eventName', function(req, res) {
    eventData.find({eventName:req.params.eventName},function (err, user) {
        if(err) res.send("Error fetching data");
        else res.json(user);
    });
});

//get all places info
router.get('/getPlaces', function(req, res){
  eventData.distinct('venue.Area', function(err, places){
    if(err)res.send("Error fetching data");
    else res.json(places);
  })
});

router.post('/getPlaces', function(req, res){
  eventData.find({"venue.Area":req.body.places}, function(err, places){
    if(err)res.send("Error fetching data");
    else res.json(places);
  })
});

//get all the colleges list
router.get('/getColleges', function(req, res){
  eventData.distinct('college', function(err, colleges){
    if(err)res.send("Error fetching data");
    else res.json(colleges);
  })
});

router.post('/getColleges', function(req, res){
  eventData.find({"college":req.body.colleges}, function(err, colleges){
    if(err)res.send("Error fetching data");
    else res.json(colleges);
  })
});

//get searched info based on Area address
// router.get('/getData/:AreaAddr', function(req, res) {
//     eventData.find({"venue.Area":req.params.AreaAddr},function (err, user) {
//         if(err) res.send("Error fetching data");
//         else res.json(user);
//     });
// });

//get searched info based on College
// router.get('/getData/:college', function(req, res) {
//     eventData.find({"college":req.params.college},function (err, user) {
//         if(err) res.send("Error fetching data");
//         else res.json(user);
//     });
// });

//save an event hosted by user
router.post('/saveData',function (req, res) {
    var newEvent = new eventData();
    newEvent.eventName = req.body.eventName;
    newEvent.college = req.body.college;
    newEvent.fee = req.body.fee;
    newEvent.details = req.body.details;
    newEvent.venue.streetAddr = req.body.streetAddr;
    newEvent.venue.Area = req.body.area;
    newEvent.venue.City = req.body.city;
    newEvent.venue.State = req.body.state;
    newEvent.venue.Pincode = req.body.pincode;
    newEvent.date = req.body.date;

    //see whether event of same name exists
    eventData.find({"eventName":newEvent.eventName},function (err, event) {
        if(err) res.send("Error fetching data");
        else if (event==""){
            newEvent.save(function (err,event) {
                if(err)res.send("Error saving newEvent : " + err);
                else {
                    res.json(event);
                }
            });
        }
        else res.json("eventName already exists");
    });
});

module.exports = router;
