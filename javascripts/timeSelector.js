"use strict";
const $ = require('jquery');
const dataFactory = require('./factory');

const $time = $('.dropdown-item');
const $dropMenu = $('.dropdown-menu');

// arrays to hold sorted attractions
let withoutTimes = [];
let withTimes = [];

// event listener for dropdown items
$time.on("click", (e) => {
  let clickedTime = event.target.innerText;
// load data and sort into 2 arrays based on if attraction has starting times or not
  dataFactory.getAll()
    .then((data) => {
      let attractions = data.attractions;
      let areas = data.areas;
      attractions.forEach((attraction) => {
        areas.forEach((area) => {
          if (attraction.area_id === area.id) {
            attraction.area = area.name;
          }
        });
      });
      console.log(attractions);
      
      for (let i = 0; i < attractions.length; i++) {
        if (attractions[i].times !== undefined) {
          withTimes.push(attractions[i]);
        } else {
          withoutTimes.push(attractions[i]);
        }
      }
     // console.log("has times", withTimes, "doesn't have times", withoutTimes);
    });
  });
       
           
          
       

      
  





  
  
  //   dataFactory.getAttractions()
  //     .then((data) => {
    //       for (let i = 0; i < data.length; i++) {
      //         if (data[i].times !== undefined) {
        //           attractionsWithTimes.push(data[i]);
        
        
        //         } else {
          //           withoutTimes.push(data[i]);
          //         }
          //       }
          //     });
          //   //console.log("Has times", attractionsWithTimes, "Doesn't have times", withoutTimes);
          // });