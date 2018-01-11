"use strict";

console.log("Gruntworking");

const $ = require("jquery");




///Ajax stuff
 function getAjax(){
    return new Promise((resolve,reject)=>{
        $.ajax({
                url:'https://awesome-land.firebaseio.com/.json'
            })
            .done((dataTotal)=>{
                resolve(dataTotal);
                console.log("data ready");
                console.log(dataTotal);
            })
            .fail(()=>{
                reject("Somebody call IT!");
            });
    });
}

getAjax();

//get area data


$(document).ready(function(){
    $("#search").keydown(function(e){
        if(e.which == 13) {
            console.log("enter");
        }
    });
});
