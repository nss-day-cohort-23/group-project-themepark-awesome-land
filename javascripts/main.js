"use strict";

const highlight = require('./SearchHighlightDOM');
const factory = require('./factory');
const formatter = require('./formatter');
const parkInfo = require('./parkInfo');
const currentEvents = require('./currentEvents');
const areaToDom = require('./areaToDom');
const attractionToDom = require('./attractionToDom');
const attractionTemplate = require('../templates/areaAttraction.hbs');


const attractionByArea = require('./attractionByArea');

// const attractionToDom = require('./attractionToDom');

const timeSelector = require('./timeSelector');





const _ = require('lodash');
// const attractionTemplate = require('../templates/areaAttraction.hbs');


const $ = require('jquery');

factory.getParkInfo();
factory.getAreas();
factory.getAttractions();
areaToDom.outputArea();
highlight.highlightArea();
attractionByArea.attractionToArea();
// formatter.attractionData();


// Attempting to format data
// formatter.getData().then(data => )

// const areaToDom = require('./areaToDom');


$(".countryContainer").click( () => {
    $(".attractionByArea").html('');
    let areaAttractionArr = [];
    let clickedArea = +event.target.id;
    // console.log("area clicked", +event.target.id);
    let attractionData = factory.getAttractions();
    let attractionTypeData = factory.getAttractionTypes();
    let attractionArea = factory.getAreas();
    Promise.all([attractionData, attractionTypeData, attractionArea])
    .then( data => {
        console.log("promiseAll data", data);
        let newAttArr = formatter.attractionData(data);
        console.log("newAttArr", newAttArr);
        newAttArr.forEach( attraction => {
            if ( clickedArea === attraction.area_id) {
                areaAttractionArr.push(attraction);
            }
            // console.log("promise data", data);
            // let attractions = data[0];
            // let types = data[1];
            // for (let a = 0; a < attractions.length; a++) {
                //     for (let t = 0; t < types.length; t++) {
                    //         if (attractions[a].type_id === types[t].id) {
                        //             attractions[a].typeName = types[t].name;
                        //         }
                        //     }
                        // }
                        // console.log("data[0]", data[0]);
                        
                        // attractions.forEach( attraction => {
                            //     if ( clickedArea === attraction.area_id) {
                                //         areaAttractionArr.push(attraction);
                                //     }
                                //     $(".attractionByArea").append(attractionTemplate(areaAttractionArr));
                            });
                            $(".attractionByArea").append(attractionTemplate(areaAttractionArr));

        // let attractionsWithTypes = attractions.map( attraction => {
        //     let currentAttraction = Object.keys(attraction);
        //     console.log("currentAttraction ", currentAttraction);
        // });
        // console.log('Promise all data', data);
    });
    // factory.getAttractions().then( data => {
    //     data.forEach( attraction => {
    //         if ( clickedArea === attraction.area_id) {
    //             areaAttractionArr.push(attraction);
    //             // console.log("clicked area attraction array", areaAttractionArr[i]);
    //         }
    //     });
    //     // for (let i = 0; i < areaAttractionArr.length; i++) {
    //     //     $("#sidebarContent").append(`<div class="attractionName" id="attraction${areaAttractionArr[i].id}">${areaAttractionArr[i].name} (${typeArr[(areaAttractionArr[i].type_id)-1]}) <div class="hidden" id="attraction${areaAttractionArr[i].id}"><p>${areaAttractionArr[i].description}</p></div></div>`);
    //     // }
    //     // HANDLEBARS
    //     $(".attractionByArea").append(attractionTemplate(areaAttractionArr));
    //     // for (let i = 0; i < areaAttractionArr.length; i++) {
    //     //     $("#sidebarContent").append(attractionTemplate(areaAttractionArr));
    //     // }
    //     // console.log("Attractions in the area", areaAttractionArr);
    // });
});


// // Show an area's attractions when clicked

// $(".countryContainer").click( () => {
//     $(".attractionByArea").html('');
//     let areaAttractionArr = [];
//     let clickedArea = +event.target.id;
//     console.log("area clicked", +event.target.id);
//     factory.getAttractions().then( data => {
//         data.forEach( attraction => {
//             if ( clickedArea === attraction.area_id) {
//                 areaAttractionArr.push(attraction);
//                 // console.log("clicked area attraction array", areaAttractionArr[i]);
//             }
//         });
//         for (let i = 0; i < areaAttractionArr.length; i++) {
//             $(".attractionByArea").append(`<div class="attractionName" id="attraction${areaAttractionArr[i].id}">${areaAttractionArr[i].name} <div class="hidden" id="attraction${areaAttractionArr[i].id}"><p>${areaAttractionArr[i].description}</p></div></div>`);
//         }
//         // for (let i = 0; i < areaAttractionArr.length; i++) {
//         //     $("#sidebarContent").append(attractionTemplate(areaAttractionArr));
//         // }
//     });
//     console.log("Attractions in the area", areaAttractionArr);
// });

// //Show an attractions's Description & Hours when clicked
// $("#sidebarContent").on('click', () => {
//     $(event.target).children("div").toggleClass("show");
//     console.log("sidebar clicked", event.target);
//     // $("event.target")
//     // $(`"#attraction${areaAttractionArr[i].id}"`);
//     // console.log("this is the attraction id that was clicked", areaAttractionArr[i].

// }); 








function setCurrentTime() {
    // console.log("set current time is running");
    let currentTime = new Date();
    let day = currentTime.getDate();
    // +1 to the month because Jan = 0.
    let month = currentTime.getMonth()+1;
    let year = currentTime.getFullYear();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    let footerTime = `${year}-${month}-${day}`;
    $("#currentTime").html(footerTime);
}
setCurrentTime();
    













