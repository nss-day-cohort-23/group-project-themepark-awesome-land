"use strict";

const $ = require('jquery');
const factory = require('./factory');

module.exports.getAreaName = (attractionAreaId) => {
    return new Promise((resolve, reject) => {
        //console.log("getAreaName is running");
        $.ajax({
            url: `https://awesome-land.firebaseio.com/areas.json?orderBy="id"&equalTo=${attractionAreaId}`
        }).done( (data) => {
            let getterAreaID = attractionAreaId - 1;
           // console.log("Promise Attraction Area ID name", data[getterAreaID].name);
            resolve(data[getterAreaID].name);
        }).fail((error) => {
            reject(error);
            console.log("This is not running correctly");
        });
    });
};


module.exports.attractionData = (data) => {
        let attractions = data[0];
        let types = data[1];
        let areas = data[2];
        for (let a = 0; a < attractions.length; a++) {
            for (let t = 0; t < types.length; t++) {
                for(let aa = 0; aa < areas.length; aa++) {
                    if (attractions[a].type_id === types[t].id) {
                        attractions[a].typeName = types[t].name;
                    }
                    if (attractions[a].area_id === areas[aa].id) {
                        attractions[a].areaName = areas[aa].name;
                    }
                }
            }
        }
        console.log("attractions", attractions);
        return attractions;
    // });
};
