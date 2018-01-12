"use strict";

const $ = require('jquery');
const factory = require('./factory');

factory.getParkInfo().then( data => {
    console.log("get parking info then data", data[0].description);
});