"use strict";

const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');

// factory.getAttractions();

let currentTime = new Date();
let thisHour = currentTime.getHours();

console.log("thishour", thisHour);
let areaArr = ["Main Street U.S.A", "Adventureland", "Frontierland", "Liberty Square", "Fantasyland", "Tomorrowland", "Cinderlla Castle"];


if (thisHour >= 9 && thisHour < 22) {
    factory.getAttractions().then(data => {
        if (thisHour === 21) {
            thisHour = "9:00PM";
        } else if (thisHour > 12 && thisHour < 22) {
            thisHour = thisHour - 12;
        } 
        if (thisHour === 1) {
            thisHour = thisHour + ":";
        }
        let stringHour = thisHour.toString(); 
        data.forEach( attraction => {
            if (attraction.times) {
            let attractionTimeLength = attraction.times;
            let attracId = attraction.area_id;
                for(let i=0; i < attractionTimeLength.length; i++) {
                    if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "A" && attraction.times[i].startsWith("9")) {
                        console.log("attractions at 9:am", attraction);
                        $("#sidebarContent").append(`<li class="attractionName">${attraction.name} (${areaArr[(attracId)-1]})</li>`);
                    }   else if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "P" && attraction.times[i].startsWith("9")) {
                                $("#sidebarContent").append(`<li class="attractionName" >${attraction.name} (${areaArr[(attracId)-1]})</li>`); 
                                console.log("attraction at this hour", attraction);    
                    }  else if (attraction.times[i].startsWith(stringHour)) {
                                $("#sidebarContent").append(`<li class="attractionName" href="#">${attraction.name} (${areaArr[(attracId)-1]})</li>`); 
                                console.log("attraction at this hour", attraction);
                    }              
                        
                }
            }
        });
    });
} else {
    $("#sidebarContent").html("Park is currently closed.");
}


// formatter.getAreaName();




