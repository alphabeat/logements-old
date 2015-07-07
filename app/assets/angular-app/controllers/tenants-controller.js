'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Tenants', '$routeParams', '$location', '$window', 
	function (Tenants, $routeParams, $location, $window) {
		var that = this;
		this.items = Tenants.query();
		this.tenant = {};
		this.modif = {};

		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.tenant = Tenants.get({id: $routeParams.id}, function () {
				that.modif = angular.copy(that.tenant);
		  	});
		}

		this.update = function (id) {
	    	that.tenant = angular.copy(that.modif);
	    	Tenants.update({id: id}, that.tenant, function () {
	    		that.items = Tenants.query();
	    	});
		}

		this.reset = function () {
			that.modif = angular.copy(that.tenant);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer ce locataire ?');

			if (confirm) {
				Tenants.remove({id: id});
			}
		}
	                                           
	  	this.create = function () {
		    var newTenant = new Tenants(that.tenant);

		    newTenant.$save(function() {
		    	$location.url('/tenants');
		    }, function (response) {
		    	console.log(response.data.errors);
		    });
  		} 
}]);
