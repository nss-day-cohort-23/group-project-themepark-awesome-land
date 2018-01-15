"use strict";

const highlight = require('./SearchHighlightDOM');
const factory = require('./factory');
const formatter = require('./formatter');
const parkInfo = require('./parkInfo');
const currentEvents = require('./currentEvents');
const areaToDom = require('./areaToDom');
const attractionToDom = require('./attractionToDom');
const _ = require('lodash');
// const attractionTemplate = require('../templates/areaAttraction.hbs');
const $ = require('jquery');

factory.getParkInfo();
factory.getAreas();
factory.getAttractions();
areaToDom.outputArea();
attractionToDom.attractionByArea();
highlight.highlightArea();

// Attempting to format data
// formatter.getData().then(data => )

// const areaToDom = require('./areaToDom');



// Show an area's attractions when clicked

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
            $("#sidebarContent").append(`<div class="attractionName" id="attraction${areaAttractionArr[i].id}">${areaAttractionArr[i].name} <div class="hidden" id="attraction${areaAttractionArr[i].id}"><p>${areaAttractionArr[i].description}</p></div></div>`);
        }
        // for (let i = 0; i < areaAttractionArr.length; i++) {
        //     $("#sidebarContent").append(attractionTemplate(areaAttractionArr));
        // }
    });
    console.log("Attractions in the area", areaAttractionArr);
});

//Show an attractions's Description & Hours when clicked
$("#sidebarContent").on('click', () => {
    $(event.target).children("div").toggleClass("show");
    console.log("sidebar clicked", event.target);
    // $("event.target")
    // $(`"#attraction${areaAttractionArr[i].id}"`);
    // console.log("this is the attraction id that was clicked", areaAttractionArr[i].

}); 





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
    




// $.ajax({
//     url:'https://awesome-land.firebaseio.com/.json'
// })
// .done((data)=>{
//     console.log("original data", data);
//     console.log("attractions", data.attractions[0].description);
// });








