'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Data', 'Tenants', '$routeParams', '$location', '$window', 'filterFilter',
	function (Data, Tenants, $routeParams, $location, $window, filterFilter) {
		var that = this;
		this.items = Data.tenants;
		this.tenant = {};
		this.modif = {};
    this.tenantToEdit = {};

		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.tenant = filterFilter(that.items, {id: $routeParams.id});
      that.tenantToEdit = angular.copy(that.tenant);
		}

		this.update = function (id) {
	    	Tenants.update({id: id}, that.modif, function () {
	    		that.items = Data.tenants = Tenants.query(function () {
            that.tenant = filterFilter(that.items, {id: id});
          });
	    	});
		}

		this.reset = function () {
			that.tenantToEdit = angular.copy(that.tenant);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer ce locataire ?');

			if (confirm) {
				Tenants.remove({id: id});
        that.items = Data.tenants = Tenants.query();
			}
		}
	                                           
	  	this.create = function () {
		    var newTenant = new Tenants(that.tenant);

		    newTenant.$save(function() {
          $location.url('/tenants');
          that.items = Data.tenants = Tenants.query();
		    }, function (response) {
		    	console.log(response.data.errors);
		    });
  		} 
}]);
