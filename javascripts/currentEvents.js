"use strict";

const $ = require('jquery');
const factory = require('./factory');

factory.getAttractions();

// Set events based on current time
function getCurrentTimeEvents(data) {
    console.log("getCurrentTimeEvents is running");
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let currentHour = hour.toString();
    let thisTime = currentHour;
    console.log("currentTime", thisTime);
}
getCurrentTimeEvents();

factory.getAttractions().then(data => {
    console.log("getAttractions is running", data);
    let currentArr = [];
    let currentTime = new Date();
    let thisHour = currentTime.getHours().toString();
    console.log("thisHour", thisHour);
    console.log(typeof thisHour);
    data.forEach( attraction => {
        if (attraction.times) {
        let attractionTimeLength = attraction.times;
        console.log("attraction time", attraction.times);
        for(let i=0; i < attractionTimeLength.length; i++) {
            if(attraction.times[i].startsWith(thisHour)) {
                console.log("Please", attraction);
            }
        }

        }
        // let eventsNow = attraction.times.filter( hour => {
        //     if (hour.includes(thisHour));
        //     console.log("hour", hour);
        // });
    });
});



