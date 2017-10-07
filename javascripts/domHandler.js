"use strict";


const createDomString = (treehouseBadges) => {
	let badgeString = '';
	treehouseBadges.forEach((badges) => {
		badgeString += `<div class="col-md-1">`;
		badgeString +=   `<div class="image-container">`;
		badgeString +=     `<img src="${badges.icon_url}" class="grow">`;
		badgeString +=   `</div>`;
		badgeString += `</div>`;
	});
	printToDom(badgeString);
};

const printToDom = (badgeString) => {
	$('#badgeCardHolder').html(badgeString);
};


module.exports = {createDomString};