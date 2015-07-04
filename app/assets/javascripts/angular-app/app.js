(function() {
	'use strict';

	var app = angular.module('housing', ['ngRoute', 'templates']);

	app.controller('PagesController', function () {
		var that = this;
		this.page = 1;
		this.details = null;
		that.mode = 'show';

		this.switchView = function (page) {
			that.page = page;
			that.details = null;
			that.mode = 'show';
		};

		this.showDetails = function (details) {
			that.details = details;
			that.mode = 'show';
		};

		this.changeMode = function (mode) {
			if (mode === 'new') {
				that.details = null;
			}
			
			that.mode = mode;
		};
	});

	app.controller('BuildingsController', function ($http) {
		var that = this;
		this.buildings = {};

		$http.get('/buildings.json')
			 .success(function (data, status, headers, config) {
			 	that.buildings = data;
		 		console.log(data);
			 })
		 	.error(function (data, status, headers, config) {
		 		console.log('ERROR');
			 });
	});

	app.controller('AppartmentsController', function ($http) {
		var that = this;
		this.appartments = {};

		$http.get('/appartments.json')
		 	.success(function (data, status, headers, config) {
			 	that.appartments = data;
			 	console.log(data);
		 	})
		 	.error(function (data, status, headers, config) {
				console.log('ERROR');
		 	});
	});

	app.controller('TenantsController', function ($http) {
		var that = this;
		this.tenants = {};

		$http.get('/tenants.json')
			.success(function (data, status, headers, config) {
				that.tenants = data;
				console.log(data);
			})
			.error(function (data, status, headers, config) {
				console.log('ERROR');
			});
	});
})();