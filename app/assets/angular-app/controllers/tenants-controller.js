'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Tenants', function (Tenants) {
	var that = this;
	this.items = Tenants.query();

	this.destroy = function (index) {
		Tenants.remove({id: that.items[index].id}, function () {
			that.items.splice(index, 1);
		});
	}
}]);

app.controller('TenantDetailsController', ['$scope', 'Tenants', '$routeParams', '$location', function ($scope, Tenants, $routeParams, $location) {
	var that = this;
	this.tenant = {};

	if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
		  that.tenant = Tenants.get({id: $routeParams.id});
	}

	this.update = function (id) {
    Tenants.update({id: id}, that.tenant);
	}
                                           
  this.create = function () {
    var newTenant = new Tenants(that.tenant);
    
    console.log(that.tenant);
    /*
    newTenant.$save(function () {
      $location.url('/tenants');
    }, function (response) {
      console.log(response.data.errors);
    });
    */
  } 
}]);
