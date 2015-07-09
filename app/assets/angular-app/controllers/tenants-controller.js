'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Data', 'Tenants', '$routeParams', '$location', '$window', 
	function (Data, Tenants, $routeParams, $location, $window) {
		var that = this;
		this.items = Data.tenants;
		this.tenant = {};
		this.modif = {};

		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.tenant = this.items[$routeParams.id - 1];
			that.modif = angular.copy(that.tenant);
		}

		this.update = function (id) {
	    	that.tenant = angular.copy(that.modif);
	    	Tenants.update({id: id}, that.tenant, function () {
	    		that.items = Data.tenants = Tenants.query();
	    	});
		}

		this.reset = function () {
			that.modif = angular.copy(that.tenant);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer ce locataire ?');

			if (confirm) {
				Tenants.remove({id: id}, function () {
          that.items = Data.tenants = Tenants.query();
        });
			}
		}
	                                           
	  	this.create = function () {
		    var newTenant = new Tenants(that.tenant);

		    newTenant.$save(function() {
          that.items = Data.tenants = Tenants.query();
		    	$location.url('/tenants');
		    }, function (response) {
		    	console.log(response.data.errors);
		    });
  		} 
}]);
