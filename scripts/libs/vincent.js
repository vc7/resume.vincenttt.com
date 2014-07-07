/*!
 * Vincent JavaScript SDK
 * Version: 0.0.1
 * http://vincenttt.com
 *
 * Copyright 2014 Vincent Chen, vincenttt.com
 * The Vincent JavaScript SDK is freely distributable under the MIT license.
 *
 */

(function(root) {
	root.Vincent = root.Vincent || {};
	root.Vincent.VERSION = "0.0.1";
}(this));

(function(root) {
	root.Vincent = root.Vincent || {};
	var Vincent = root.Vincent;

	// Grab jQuery reference if id exist
	if (typeof($) !== "undefined") {
		Vincent.$ = $;
	};

	Vincent.serverURL = "http://api.vincenttt.com";
	Vincent.initialized = false;

	Vincent.initialize = function(apiVersion) {
		if (isNaN(parseFloat(apiVersion))) {

			throw "Vincent.initialize() was not passed a float number";

		} else {

			Vincent.initialized = true;

		};

		Vincent._resumeData = Vincent._getResumeData(apiVersion);
	}

	// Helpers
	// -----

	Vincent._getResumeData = function(apiVersion) {

		var apiPath = Vincent._getAPIPath(apiVersion);

		// Use dummy data for now
		return {
			about: {
				name: "About Me",
				basic: {
					year: 1989,
					hp: 99,
					mp: 98,
					discription: ""
				},
				doings: [ // Array
					{
						title: "Web",
						discription: "",
						icon: ""
					},
					{
						title: "Mobile",
						discription: "",
						icon: ""
					},
					{
						title: "Play",
						discription: "",
						icon: ""
					},
				]
			},
			skills: {
				name: "Skills",
				languages: [ // Array
					{
						title: "JavaScript",
						subtitle: "Pure javascript, jQuery, Angular.js.",
						persent: 80
					}

				],

			},
			works: {
				name: "Works"

			},
			details: {
				name: "Details",
			}
		};
	};

	Vincent._getAPIPath = function(apiVersion) {
		return Vincent.serverURL + '/' + apiVersion + '/data.json'; 
	};

}(this));

(function(root) {
	root.Vincent = root.Vincent || {};
	
	Vincent.Object = function(type) {
		return Vincent._resumeData[type];
	};

}(this));