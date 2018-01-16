"use strict";

const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');
const attractionTemplate = require('../templates/areaAttraction.hbs');


let currentTime = new Date();
let thisHour = currentTime.getHours();


// THIS IS NOT NEEDED BUT KEEPING IN CASE THE OTHER OPTION BREAKS!
// if (thisHour >= 9 && thisHour < 22) {
//     factory.getAttractions().then(data => {
//         if (thisHour === 21) {
//             thisHour = "9:00PM";
//         } else if (thisHour > 12 && thisHour < 22) {
//             thisHour = thisHour - 12;
//         } 
//         if (thisHour === 1) {
//             thisHour = thisHour + ":";
//         }
//         let stringHour = thisHour.toString(); 
//         data.forEach( attraction => {
//             if (attraction.times) {
//             let attractionTimeLength = attraction.times;
//             let attracId = attraction.area_id;
//                 for(let i=0; i < attractionTimeLength.length; i++) {
//                     if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "A" && attraction.times[i].startsWith("9")) {
//                         // console.log("attractions at 9:am", attraction);
//                         $("#sidebarContent").append(`<li class="attractionName">${attraction.name} (${areaArr[(attracId)-1]})</li>`);
//                     }   else if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "P" && attraction.times[i].startsWith("9")) {
//                                 $("#sidebarContent").append(`<li class="attractionName" >${attraction.name} (${areaArr[(attracId)-1]})</li>`); 
//                                 // console.log("attraction at this hour", attraction);    
//                     }  else if (attraction.times[i].startsWith(stringHour)) {
//                                 $("#sidebarContent").append(`<li class="attractionName" href="#">${attraction.name} (${areaArr[(attracId)-1]})</li>`); 
//                                 // console.log("attraction at this hour", attraction);
//                     }              
                        
//                 }
//             }
//         });
//     });
// // } else {
// //     $("#sidebarContent").html("Park is currently closed.");
// }


if (thisHour >= 9 && thisHour < 22) {
    let currentAttractionArr = [];
    let attractionData = factory.getAttractions();
    let attractionTypeData = factory.getAttractionTypes();
    let attractionArea = factory.getAreas();
    Promise.all([attractionData, attractionTypeData, attractionArea])
    .then(data => {
        // console.log("promiseAll data", data);
        let newAttArr = formatter.attractionData(data);
        console.log("newAttArr", newAttArr);
        newAttArr.forEach( attraction => {
            console.log("attraction", attraction);
            if (thisHour === 21) {
                thisHour = "9:00PM";
            } else if (thisHour > 12 && thisHour < 22) {
                thisHour = thisHour - 12;
            } 
            if (thisHour === 1) {
                thisHour = thisHour + ":";
            }
            let stringHour = thisHour.toString(); 
            if (attraction.times) {
            let attractionTimeLength = attraction.times;
            let attracId = attraction.area_id;
                for(let i=0; i < attractionTimeLength.length; i++) {
                    if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "A" && attraction.times[i].startsWith("9")) {
                        // console.log("attractions at 9:am", attraction);
                        currentAttractionArr.push(attraction);
                        $(".currentEvents").append(attractionTemplate(currentAttractionArr));
                    }   else if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "P" && attraction.times[i].startsWith("9")) {
                        currentAttractionArr.push(attraction);
                        $(".currentEvents").append(attractionTemplate(currentAttractionArr)); 
                                // console.log("attraction at this hour", attraction);    
                    }  else if (attraction.times[i].startsWith(stringHour)) {
                        currentAttractionArr.push(attraction);
                        $(".currentEvents").append(attractionTemplate(currentAttractionArr)); 
                                // console.log("attraction at this hour", attraction);
                    }              
                        
                }
            }
        });
    }); 
    } else {
        $("#sidebarContent").html("Park is currently closed.");
}





