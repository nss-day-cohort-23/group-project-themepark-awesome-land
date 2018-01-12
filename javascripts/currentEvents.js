"use strict";

const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');

// factory.getAttractions();

factory.getAttractions().then(data => {
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
    // let promiseArr = [];
    data.forEach( attraction => {
        if (attraction.times) {
        let attractionTimeLength = attraction.times;
            for(let i=0; i < attractionTimeLength.length; i++) {
                if(attraction.times[i].startsWith(stringHour)) {
                    let attracId = attraction.area_id;
                    console.log("formatter.getAreaName(attracId) with then", formatter.getAreaName(attracId).then( areaName => areaName));
                    // call a function whose job it is to call firebase for that specific attractions area. attraction.time.length[i]
                    $("#sidebarContent").append(`<li class="attractionName">${attraction.name} <span>(${formatter.getAreaName(attracId).then( areaName => areaName)})</span></li>`);
                }
            }
            // return Promise.all(promiseArr).then( data => {
            // console.log("promise all", data);
            // });
        }
    });
});

// formatter.getAreaName();


// in new function pull out the area for that function. When the object comes back grab the name and add it to the object



