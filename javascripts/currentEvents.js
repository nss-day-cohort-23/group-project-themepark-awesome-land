"use strict";

const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');

// factory.getAttractions();

let currentTime = new Date();
let thisHour = currentTime.getHours();
console.log("thishour", thisHour);

if (thisHour >= 10 && thisHour < 22) {
    factory.getAttractions().then(data => {
        if (thisHour > 12 && thisHour < 22) {
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
                        // console.log("formatter.getAreaName(attracId) with then", formatter.getAreaName(attracId).then( areaName => areaName));
                        $("#sidebarContent").append(`<li class="attractionName">${attraction.name} (${formatter.getAreaName(attracId).then( areaName => areaName)})</li>`);
                    }
                }
                // return Promise.all(promiseArr).then( data => {
                // console.log("promise all", data);
                // });
            }
        });
    });
} else {
    $("#sidebarContent").html("Park is currently closed.");
}


// formatter.getAreaName();




