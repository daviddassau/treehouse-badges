"use strict";


const createDomString = (treehouseBadges) => {
	let badgeString = '';
	treehouseBadges.forEach((badges) => {
		badgeString += `<div class="col-md-2">`;
		badgeString +=   `<div class="image-container">`;
		badgeString +=     `<img src="${badges.icon_url}" class="img-responsive">`;
		badgeString +=   `</div>`;
		// badgeString +=   `<div class="description-container">`;
		// badgeString +=     `<h3>${badges.name}</h3>`;
		// badgeString +=   `</div>`;
		badgeString += `</div>`;
	});
	printToDom(badgeString);
};

const printToDom = (badgeString) => {
	$('#badgeCardHolder').html(badgeString);
};


module.exports = {createDomString};