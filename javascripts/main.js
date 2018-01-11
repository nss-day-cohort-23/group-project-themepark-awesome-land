"use strict";

const factory = require('./factory');
const currentEvents = require('./currentEvents');

const $ = require('jquery');

// factory.getParkInfo();
// factory.getAreas();
// factory.getAttractions();

console.log("Is this working?");


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

// // Set events based on current time
// function getCurrentTimeEvents() {
//     console.log("getCurrentTimeEvents is running");
//     let currentTime = new Date();
//     let hour = currentTime.getHours();
//     let currentHour = hour.toString();
//     let thisTime = currentHour + ":00";
//     console.log("currentTime", thisTime);
//     return new Promise( (resolve, reject) => {
//         $.ajax({
//             url:'https://awesome-land.firebaseio.com/attractions.json'
//         })
//         .done((data)=>{
//             console.log("getCurrentTimeEvents", data);
//         });
//     });
// }
// getCurrentTimeEvents();



// $.ajax({
//     url:'https://awesome-land.firebaseio.com/.json'
// })
// .done((data)=>{
//     console.log("original data", data);
//     console.log("attractions", data.attractions[0].description);
// });


///Ajax stuff
//  function getAjax(){
//     return new Promise((resolve,reject)=>{
//         $.ajax({
//                 url:'https://awesome-land.firebaseio.com/.json'
//             })
//             .done((dataTotal)=>{
//                 resolve(dataTotal);
//                 console.log("data ready");
//                 console.log(dataTotal);
//             })
//             .fail(()=>{
//                 reject("Somebody call IT!");
//             });
//     });
// }

// getAjax();

//get area data

