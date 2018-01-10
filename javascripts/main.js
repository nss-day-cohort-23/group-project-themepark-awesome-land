"use strict";

console.log("Is this working?");

const $ = require('jquery');

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let date = currentTime.getDate();

if (hours > 12) {
    hours = hours - 12;
    // hours = hours
    console.log("current time", hours + ":" + minutes);
}

$("#currentTime").html(currentTime);