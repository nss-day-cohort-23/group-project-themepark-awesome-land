"use strict";

let factory = require("./factory");
const $ = require('jquery');
const formatter = require('./formatter');
const attractionTemplate = require('../templates/areaAttraction.hbs');


module.exports.attractionToArea=()=>{
    $(".countryContainer").click( () => {
        $(".attractionByArea").html('');
        let areaAttractionArr = [];
        let clickedArea = +event.target.id;
        let attractionData = factory.getAttractions();
        let attractionTypeData = factory.getAttractionTypes();
        let attractionArea = factory.getAreas();
        Promise.all([attractionData, attractionTypeData, attractionArea])
        .then( data => {
            let newAttArr = formatter.attractionData(data);
            newAttArr.forEach( attraction => {
                if ( clickedArea === attraction.area_id) {
                    areaAttractionArr.push(attraction);
                }
            });
            $(".attractionByArea").append(attractionTemplate(areaAttractionArr));
        });
    });    
};

// Add and remove description & times when attraction is clicked
$(document).on('click', '.attractionName', function() {
    $(this).children().addClass("show");
    $(this).siblings().children(".hidden").removeClass("show");
});





















