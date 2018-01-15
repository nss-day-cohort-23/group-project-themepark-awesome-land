"use strict";

let factory = require("./factory");
let attrDom = require("./attractionToDom");
const $ = require('jquery');

let areaKey ="";

let getData = ()=>{
    factory.getAttractionTypes().then((data)=>{
        
        data.forEach(data =>{
            console.log(data.id);
            if(data.id == areaKey){
                console.log("yes!");
                $(".attrName").append(`<div class="attrDesc">${data.name}</div>`);
            }
        });       
    });
};

let descOut = ()=>{
    areaKey = event.currentTarget.id;
    console.log("right here", areaKey);
    // $(".attractionByArea").empty();
    getData();
};

module.exports.attractionData= ()=>{
    factory.getAttractions().then((data)=>{
        console.log("first dump", data);
            $(".attractionByArea").on("click",event, descOut); 
        });  
};

