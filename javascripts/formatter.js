"use strict";

const $ = require('jquery');
const factory = require('./factory');

module.exports.getAreaName = (attractionAreaId) => {
    return new Promise((resolve, reject) => {
        console.log("getAreaName is running");
        $.ajax({
            url: `https://awesome-land.firebaseio.com/areas.json?orderBy="id"&equalTo=${attractionAreaId}`
        }).done( (data) => {
            let getterAreaID = attractionAreaId - 1;
            console.log("Promise Attraction Area ID name", data[getterAreaID].name);
            resolve(data[getterAreaID].name);
        }).fail((error) => {
            reject(error);
            console.log("This is not running correctly");
        });
    });
};



// 







