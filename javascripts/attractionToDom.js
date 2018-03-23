"use strict";

let factory = require("./factory");
const $ = require('jquery');
let key = "";
let get = () => {
	factory.getAttractions().then((data) => {
		data.forEach(data => {
			if (data.area_id == key) {
				$(".attractionByArea").append(`<div class="attrName"><strong>${data.name}</strong>:
                ${data.description}</div>`);
			}
		});
	});
};

let match = () => {
	key = event.currentTarget.id;
	$(".attractionByArea").empty();
	get();
};

module.exports.attractionByArea = () => {
	factory.getAreas().then((data) => {
		$('.areas').on("click", event, match);
	});
};


