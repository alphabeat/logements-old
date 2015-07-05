'use strict';

var app = angular.module('app');

app.factory('Buildings', ['$resource', function ($resoure) {
	return $resoure(
		'/api/buildings/:id', 
		{ id: '@id' }
	);
}]);

app.factory('Tenants', function ($http) {
	var tenants = {};

	tenants.getAll = function () {
		return $http.get('/api/tenants');
	};

	tenants.getOne = function (id) {
		return $http.get('/api/tenants/'+id);
	};

	tenants.save = function (tenant) {
		$http.put('/api/tenants/'+tenant.id, tenant);
	}

	return tenants;
});