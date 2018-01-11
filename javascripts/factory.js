"use strict";

const $ = require('jquery');

module.exports.getParkInfo = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://awesome-land.firebaseio.com/areas"
        }).done( (data) => {
            resolve(data);
            console.log("park info data", data);
    
        }).fail((error) => {
            reject(error);
        });
    });
};

module.exports.getAreas = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://awesome-land.firebaseio.com/areas"
        }).done( (data) => {
            resolve(data);
            console.log("area data", data);
    
        }).fail((error) => {
            reject(error);
        });
    });
};

module.exports.getAttractions = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://awesome-land.firebaseio.com/attractions"
        }).done( (data) => {
            resolve(data);
            console.log("attraction data", data);
    
        }).fail((error) => {
            reject(error);
        });
    });
};