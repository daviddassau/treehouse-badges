"use strict";


const dom = require('./domHandler');


let badges = [];

$.ajax('https://teamtreehouse.com/daviddassau.json').done((data) => {
	badges = data.badges;
	dom.createDomString(badges);
}).fail((error) => {
	console.log(error);
});

const getBadges = () => {
	return badges;
};


module.exports = {getBadges};