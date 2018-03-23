"use strict";

let factory = require("./factory");
let attrDom = require("./attractionToDom");
const $ = require('jquery');

let areaKey = "";
function descOut() {
	console.log("hello");
}

module.exports.attractionData = () => {
	factory.getAttractions().then((data) => {
		$(".attractionByArea").on("click", event, descOut);
	});
};

