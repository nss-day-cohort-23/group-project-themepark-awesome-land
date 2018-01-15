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
// attractionToDom.attractionByArea();
highlight.highlightArea();
attractionByArea.attractionToArea();

// Attempting to format data
// formatter.getData().then(data => )

// const areaToDom = require('./areaToDom');





let typeArr = ["ride", "restaurant", "show", "vendor", "character meet", "animals", "game", "special event"];
$(".countryContainer").click( () => {
    $("#sidebarContent").html('');
    let areaAttractionArr = [];
    let clickedArea = +event.target.id;
    console.log("area clicked", +event.target.id);
    factory.getAttractions().then( data => {
        data.forEach( attraction => {
            if ( clickedArea === attraction.area_id) {
                areaAttractionArr.push(attraction);
                // console.log("clicked area attraction array", areaAttractionArr[i]);
            }
        });
        for (let i = 0; i < areaAttractionArr.length; i++) {
            $("#sidebarContent").append(`<div class="attractionName" id="attraction${areaAttractionArr[i].id}">${areaAttractionArr[i].name} (${typeArr[(areaAttractionArr[i].type_id)-1]}) <div class="hidden" id="attraction${areaAttractionArr[i].id}"><p>${areaAttractionArr[i].description}</p></div></div>`);
        }
        // HANDLEBARS
        // let attractionObj = {
        //     key: areaAttractionArr
        // };
        // $("#sidebarContent").append(attractionTemplate(attractionObj));
        // for (let i = 0; i < areaAttractionArr.length; i++) {
        //     $("#sidebarContent").append(attractionTemplate(areaAttractionArr));
        // }
    });
    console.log("Attractions in the area", areaAttractionArr);
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
    













