"use strict";
const $ = require('jquery');
const dataFactory = require('./factory');

const $time = $('.dropdown-item');
const $timeDiv = $('.searchByTime');
// arrays to hold sorted attractions
let withoutTimes = [];
let withTimes = [];

// event listener for dropdown items
$time.on("click", (e) => {
  clearList();
  let clickedTime = event.target.innerText;
  let shortTime = clickedTime.slice(0, 2);

  //console.log(clickedTime);
  //console.log(withTimes);
  withTimes.forEach((attraction) => {
    let attractionTime = attraction.times;
    for (let i = 0; i < attractionTime.length; i++) {
      if (attractionTime[i].startsWith(shortTime) && attractionTime[i].charAt(4) === "A" && attraction.times[i].startsWith("9:")) {
        console.log("9am", attraction);
        $timeDiv.append(`<li class="attractionName">${attraction.name} (${attraction.area})</li>`);
      } else if(attraction.times[i].startsWith(shortTime)){
          console.log("other times", attraction);
          $timeDiv.append(`<li class="attractionName">${attraction.name} (${attraction.area})</li>`);

        }
      }
    });
  });
          
      
          
  // load data and sort into 2 arrays based on if attraction has starting times or not
function loadDataAndSort() {
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
      //console.log(attractions);

      for (let i = 0; i < attractions.length; i++) {
        if (attractions[i].times !== undefined) {
          withTimes.push(attractions[i]);
        } else {
          withoutTimes.push(attractions[i]);
        }
      }
      //console.log("has times", withTimes, "doesn't have times", withoutTimes);
    });
}

function clearList() {
  $timeDiv.html('');
}
         
  loadDataAndSort();

    

    
  

  
          
       

      
  





  
