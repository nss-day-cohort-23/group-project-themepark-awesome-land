"use strict";

const factory = require('./factory');
const areaToDom = require('./areaToDom');
const $ = require('jquery');

factory.getParkInfo();
factory.getAreas();
factory.getAttractions();

// console.log("Is this working?");


// Set current Time within footer
function setCurrentTime() {
    // Variables to set date info
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let day = currentTime.getDay();
    let morn = "AM";
    if (hours > 12) {
        hours = hours - 12;
        morn = "PM";
    } else if (hours === 24) {
        hours = 0;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let currentEventTime = hours + ":" + minutes + morn;
    let dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    let footerTime = dayArr[day] + " " + currentEventTime;
    $("#currentTime").html(footerTime);
}

setCurrentTime();
setInterval( setCurrentTime, 1000);

// Set events based on current time
function getCurrentTimeEvents() {
    console.log("getCurrentTimeEvents is running");
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let currentHour = hour.toString();
    let thisTime = currentHour + ":00";
    // console.log("currentTime", thisTime);
    return new Promise( (resolve, reject) => {
        $.ajax({
            url:'https://awesome-land.firebaseio.com/attractions.json'
        })
        .done((data)=>{
            console.log("getCurrentTimeEvents", data);
        });
    });
}
getCurrentTimeEvents();



// $.ajax({
//     url:'https://awesome-land.firebaseio.com/.json'
// })
// .done((data)=>{
//     console.log("original data", data);
//     console.log("attractions", data.attractions[0].description);
// });







// Search function to match user input with JSON
$(document).ready(function(){
    $("#search").keydown(function(e){
        if(e.which == 13) {
            var userSearch = $("#search").val().toLowerCase();
            $('#search').val(''); //CLEAR INPUT
            factory.getAttractions().then( (attrData) => {
                var matchingAttractions = [];
                for (let i = 0; i < attrData.length; i++){
                    var attractionNames = attrData[i].name.toLowerCase();
                    if(attractionNames.includes(userSearch)){
                        matchingAttractions.push(attrData[i]);
                    }
                }
                //loop over matching attractions array and find the area_id key
                getAreaID(matchingAttractions);
                return matchingAttractions;
            });
        }
    });
});

//loop over matching attractions array and find the area_id key
var _ = require('lodash');

var idArr = [];
function getAreaID(attractionArr) {
    attractionArr.forEach(function(e){
    idArr.push(e.area_id);
    console.log(_.uniqBy(idArr)); 
    return idArr;
});
}
// use area_id to give a class to area section, or to toggle highlight class



