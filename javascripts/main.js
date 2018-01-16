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
const timeSelector = require('./timeSelector');
const _ = require('lodash');
const $ = require('jquery');

factory.getParkInfo();
factory.getAreas();
factory.getAttractions();
areaToDom.outputArea();
highlight.highlightArea();
attractionByArea.attractionToArea();



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
    













