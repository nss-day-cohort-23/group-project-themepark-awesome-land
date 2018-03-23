"use strict";

let factory = require("./factory");
let attrDom = require("./attractionToDom");
const $ = require('jquery');

let areaKey = "";

let getData = () => {
	factory.getAttractionTypes().then((data) => {
		data.forEach(data => {
			if (data.id == areaKey) {
				$(".attrName").append(`<div class="attrDesc">${data.name}</div>`);
			}
		});
	});
};

let descOut = () => {
	areaKey = event.currentTarget.id;
	getData();
};

module.exports.attractionData = () => {
	factory.getAttractions().then((data) => {
		$(".attractionByArea").on("click", event, descOut);
	});
};

