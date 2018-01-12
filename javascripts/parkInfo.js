"use strict";

const $ = require('jquery');
const factory = require('./factory');

factory.getParkInfo().then( data => {
    console.log("opening", data[0].operating_hours[0].opening);
    $("#sidebarContent").append(`<li> ${data[0].location} </li><li> Open: ${data[0].operating_hours[0].opening}:00AM to </li><li>${data[0].operating_hours[0].closing}:00PM</li>`);
});