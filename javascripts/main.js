"use strict";

console.log("Is this working?");

const $ = require('jquery');

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let date = currentTime.getDate();
let morn = "AM";

if (hours > 12) {
    hours = hours - 12;
    morn = "PM";
    let footerTime = hours + ":" + minutes + " " + morn;
    $("#currentTime").html(footerTime);
}
