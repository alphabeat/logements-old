'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Data', 'Tenants', '$routeParams', '$location', '$window', 'filterFilter',
	function (Data, Tenants, $routeParams, $location, $window, filterFilter) {
		var that = this;
		this.items = Data.tenants;
		this.tenant = {};
		this.modif = {};

    this.showTenant = function (tenant) {
      that.isShowVisible = true;
      that.isEditVisible = false;
      that.tenant = tenant;
    }
    
    this.editTenant = function (tenant) {
      that.isShowVisible = false;
      that.isEditVisible = true;
      that.modif = angular.copy(tenant);
    }

		this.update = function (tenant) {
	    	Tenants.update({id: tenant.id}, tenant, function () {
          that.items = Data.tenants = Tenants.query();
        });
		}
    
    this.save = function (tenant) {
      that.isEditVisible = false;
      if (tenant.id) {
        that.update(tenant);
        that.showTenant(tenant);
      }
    }

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer ce locataire ?');

			if (confirm) {
				Tenants.remove({id: id}, function () {
          that.items = Data.tenants = Tenants.query();
          that.isShowVisible = false;
        });
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
