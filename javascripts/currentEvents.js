// import { getAttractions } from './factory';

"use strict";

const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');

factory.getAttractions();

// console.log("attraction.times[i].area_id", attraction.times[i].area_id);

// Set events based on current time
// function getCurrentTimeEvents(data) {
//     console.log("getCurrentTimeEvents is running");
//     let currentTime = new Date();
//     let hour = currentTime.getHours();
//     let currentHour = hour.toString();
//     let thisTime = currentHour;
//     console.log("currentTime", thisTime);
// }
// getCurrentTimeEvents();

factory.getAttractions().then(data => {
    console.log("getAttractions is running", data);
    // let currentArr = [];
    let currentTime = new Date();
    let thisHour = currentTime.getHours();
    if (thisHour > 12) {
        thisHour = thisHour - 12;
    }
    if (thisHour === 1) {
        thisHour = thisHour + ":";
    }
    let stringHour = thisHour.toString();
    console.log("stringHour", stringHour);
    let promiseArr = [];
    data.forEach( attraction => {
        if (attraction.times) {
        let attractionTimeLength = attraction.times;
        // console.log("attraction time", attraction.times);
            for(let i=0; i < attractionTimeLength.length; i++) {
                if(attraction.times[i].startsWith(stringHour)) {
                    let attracId = attraction.area_id;
                    // let getNameVar = formatter.getAreaName(attracId)
                    console.log("Events taking place this hour", attraction);
                    console.log("attraction.area_id", attraction.area_id);
                    console.log(typeof attraction.area_id);
                    promiseArr.push(formatter.getAreaName(attracId));
                    console.log("promiseArr", promiseArr);

                    // call a function whose job it is to call firebase for that specific attractions area. attraction.time.length[i]


                    // $("#sidebarContent").append(`<li>${attraction.name} (${attraction.area_id})</li>`);
                }

            }
            return Promise.all(promiseArr).then( data => {
                console.log("promise all", data);
            });
        }
    });
});

// formatter.getAreaName();


// in new function pull out the area for that function. When the object comes back grab the name and add it to the object



