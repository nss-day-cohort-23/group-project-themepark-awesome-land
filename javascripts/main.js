"use strict";
console.log("working");

const $ = require("jquery");


 
 $.ajax({
        url:'https://awesome-land.firebaseio.com/.json'
    })
    .done((data)=>{
        console.log(data);
    });