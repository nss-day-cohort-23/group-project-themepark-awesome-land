"use strict";

let factory = require("./factory");
const $ = require('jquery');



// module.exports.outputArea = ()=>{
//     factory.getAreas().then((data)=>{
//         data.forEach(data => {
//             let areaName = data.name;
//             let areaId = data.id;
//             let
//             $(".countryContainer").append(`<div class ="areas" id = ${areaId}>${areaName}</div>`);
//         });
//     });
// };

module.exports.outputArea = ()=>{
    factory.getAreas().then((data)=>{
        data.forEach(data => {
            let areaName = data.name;
            let areaId = data.id;
            // let mapDiv = document.createElement("div");
            $("#areaContainer").append(`<div class ="area area${areaId}" id =${areaId}>${areaName}</div>`);
        });
    });
};

    