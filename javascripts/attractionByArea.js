"use strict";

let factory = require("./factory");
const $ = require('jquery');


module.exports.attractionToArea=()=>{
    $(".countryContainer").click( () => {
        $(".attractionByArea").html('');
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
                $(".attractionByArea").append(`<div class="attractionName" id="attraction${areaAttractionArr[i].id}">${areaAttractionArr[i].name} <div class="hidden" id="attraction${areaAttractionArr[i].id}"><p>${areaAttractionArr[i].description}</p></div></div>`);
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

};






















