"use strict";

const factory = require('./factory');
const formatter = require('./formatter');
const parkInfo = require('./parkInfo');
const currentEvents = require('./currentEvents');
const areaToDom = require('./areaToDom');
const attractionToDom = require('./attractionToDom');

const $ = require('jquery');

factory.getParkInfo();
factory.getAreas();
factory.getAttractions();
areaToDom.outputArea();
attractionToDom.attractionByArea();

// const areaToDom = require('./areaToDom');



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




// Search function to match user input with JSON
$(document).ready(function(){
    $("#search").keydown(function(e){
        if(e.which == 13) {
            var userSearch = $("#search").val().toLowerCase();
            $('#search').val(''); //CLEAR INPUT
            factory.getAttractions().then( (attrData) => {
                var matchingAttractions = [];
                for (let i = 0; i < attrData.length; i++){
                    var attractionNames = attrData[i].name.toLowerCase();
                    if(attractionNames.includes(userSearch)){
                        matchingAttractions.push(attrData[i]);
                    }
                }
                //loop over matching attractions array and find the area_id key
                getAreaID(matchingAttractions);
                return matchingAttractions;
            });
        }
    });
});

//loop over matching attractions array and find the area_id key
var _ = require('lodash');

var idArr = [];
function getAreaID(attractionArr) {
    attractionArr.forEach(function(e){
    idArr.push(e.area_id);
    // console.log(_.uniqBy(idArr)); 
    return idArr;
});
}
// use area_id to give a class to area section, or to toggle highlight class




