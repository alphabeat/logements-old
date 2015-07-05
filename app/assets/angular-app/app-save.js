(function() {
	'use strict';

	var app = angular.module('housing', ['ngRoute', 'ngResource']);

	app.config(function($routeProvider) {
		$routeProvider.when('/tenants', {
			templateUrl: "angular-app/templates/edit.html",
			controller: "EditController",
			controllerAs: "edit"
		});
	});

	app.factory('Tenant', function ($resource) {
		return $resource('/api/tenants/:id', {id: '@id'});
	});

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

		$http.get('/api/buildings.json')
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

		$http.get('/api/appartments.json')
		 	.success(function (data, status, headers, config) {
			 	that.appartments = data;
			 	console.log(data);
		 	})
		 	.error(function (data, status, headers, config) {
				console.log('ERROR');
		 	});
	});

	app.controller('TenantsController', function (Tenant) {
		var that = this;
		this.tenants = {};

		Tenant.query(function (data) {
			that.tenants = data;
		});

/*		$http.get('/api/tenants.json')
			.success(function (data, status, headers, config) {
				that.tenants = data;
				console.log(data);
			})
			.error(function (data, status, headers, config) {
				console.log('ERROR');
			});*/
	});

	app.controller('NewtenantController', function (Tenant) {
		var that = this;
		this.tenant = {};
		this.wasSubmitted = false;

		this.submit = function () {
			that.wasSubmitted = true;
			Tenant.save(that.tenant);
			console.log(that.wasSubmitted);
		};
	});
})();