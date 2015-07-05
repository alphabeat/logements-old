'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Tenants', function (Tenants) {
	var that = this;
	this.items = {};
	Tenants.getAll()
		.success(function (jsonData, statusCode) {
			that.items = jsonData;
		});

	this.destroy = function (index) {
		Tenants.remove({id: that.items[index].id}, function () {
			that.items.splice(index, 1);
		});
	}
}]);

app.controller('TenantUpdateController', ['Tenants', '$routeParams', '$location', function (Tenants, $routeParams, $location) {
	var that = this;
	this.tenant = {};

	if ($routeParams.id) {
		Tenants.getOne($routeParams.id)
			.success(function (jsonData, statusCode) {
				that.tenant = jsonData;
			})
			.error(function (data, statusCode) {
				console.log(statusCode);
			});
	}

	this.submit = function (id) {
		Tenants.save(this.tenant);
		$location.url('/tenants/'+id);
	}
}]);

app.controller('TenantShowController', ['Tenants', '$routeParams', function (Tenants, $routeParams) {
	var that = this;
	this.tenant = {};

	if ($routeParams.id) {
		Tenants.getOne($routeParams.id)
			.success(function (jsonData, statusCode) {
				that.tenant = jsonData;
			});
	}
}]);