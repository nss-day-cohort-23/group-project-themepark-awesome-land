"use strict";

const $ = require('jquery');

module.exports.getParkInfo = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://awesome-land.firebaseio.com/park-info.json"
		}).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

module.exports.getAreas = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://awesome-land.firebaseio.com/areas.json"
		}).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

module.exports.getAttractions = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://awesome-land.firebaseio.com/attractions.json"
		}).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

module.exports.getAll = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://awesome-land.firebaseio.com/.json"
		}).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

module.exports.getAttractionTypes = () => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: "https://awesome-land.firebaseio.com/attraction_types.json"
		}).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

