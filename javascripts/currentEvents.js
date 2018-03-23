"use strict";

const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');
const attractionTemplate = require('../templates/areaAttraction.hbs');
const currentTemplate = require('../templates/currentEvents.hbs');
let currentTime = new Date();
let thisHour = currentTime.getHours();

if (thisHour >= 9 && thisHour < 22) {
	let currentAttractionArr = [];
	let attractionData = factory.getAttractions();
	let attractionTypeData = factory.getAttractionTypes();
	let attractionArea = factory.getAreas();
	Promise.all([attractionData, attractionTypeData, attractionArea])
		.then(data => {
			let newAttArr = formatter.attractionData(data);
			newAttArr.forEach(attraction => {
				if (thisHour === 21) {
					thisHour = "9:00PM";
				} else if (thisHour > 12 && thisHour < 22) {
					thisHour = thisHour - 12;
				}
				if (thisHour === 1) {
					thisHour = thisHour + ":";
				}
				let stringHour = thisHour.toString();
				if (attraction.times) {
					let attractionTimeLength = attraction.times;
					let attracId = attraction.area_id;
					for (let i = 0; i < attractionTimeLength.length; i++) {
						if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "A" && attraction.times[i].startsWith("9")) {
							$(".currentEvents").append(currentTemplate(attraction));
						} else if (attraction.times[i].startsWith(stringHour) && attraction.times[i].charAt(4) === "P" && attraction.times[i].startsWith("9")) {
							$(".currentEvents").append(currentTemplate(attraction));
						} else if (attraction.times[i].startsWith(stringHour)) {
							$(".currentEvents").append(currentTemplate(attraction));
						}
					}
				}
			});
		});
} else {
	$("#sidebarContent").html("Park is currently closed.");
}





