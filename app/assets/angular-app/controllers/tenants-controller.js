'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Tenants', function (Tenants) {
	var that = this;
	this.items = this.items = Tenants.query();
}]);

app.controller('TenantDetailsController', ['Tenants', '$routeParams', '$location', '$window', 
	function (Tenants, $routeParams, $location, $window) {
		var that = this;
		this.tenant = {};
		this.modif = {};

		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.tenant = Tenants.get({id: $routeParams.id}, function () {
				that.modif = angular.copy(that.tenant);
		  	});
		}

		this.update = function (id) {
	    	that.tenant = angular.copy(that.modif);
	    	Tenants.update({id: id}, that.tenant);
		}

		this.reset = function () {
			that.modif = angular.copy(that.tenant);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer ce locataire ?');

			if (confirm) {
				Tenants.remove({id: id}, function () {
					$location.url('/tenants');
				});
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
