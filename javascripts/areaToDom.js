"use strict";

let factory = require("./factory");
const $ = require('jquery');



module.exports.outputArea = ()=>{
    factory.getAreas().then((data)=>{
        data.forEach(data => {
            let areaName = data.name;
            let areaId = data.id;
            $(".countryContainer").append(`<div class ="areas" id = ${areaId}>${areaName}</div>`);
        });
    });
};

    