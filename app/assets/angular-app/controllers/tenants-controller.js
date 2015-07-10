'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Data', 'Tenants', '$routeParams', '$location', '$window', '$filter',
	function (Data, Tenants, $routeParams, $location, $window, $filter) {
		var that = this;
		this.items = Data.tenants;
		this.tenant = {};
		this.modif = {};

    this.showTenant = function (tenant) {
      that.isShowVisible = true;
      that.tenant = tenant;
    }
    
    this.editTenant = function () {
      that.isShowVisible = false;
      that.isEditVisible = true;
      that.modif = angular.copy(that.tenant);
    }

    this.newTenant = function () {
      that.isShowVisible = false;
      that.isEditVisible = false;
      that.isNewVisible = true;
      that.tenant = {};
    }

		this.update = function (tenant) {
	    	Tenants.update({id: tenant.id}, tenant);
		}

    this.cancel = function () {
      if (that.tenant.id) {
        that.isEditVisible = false;
        angular.extend(that.tenant, that.modif);
        that.showTenant(that.tenant);
      } else {
        that.isNewVisible = false;
        that.tenant = {};
      }
    }
    
    this.save = function () {
      if (that.tenant.id) {
        that.isEditVisible = false;
        that.update(that.tenant);
        that.showTenant(that.tenant);
      } else {
        that.isNewVisible = false;
        that.create();
      }
    }

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer ce locataire ?');

			if (confirm) {
				Tenants.remove({id: id}, function () {
          that.isShowVisible = false;
          that.items = $filter('filter')(that.items, {id: '!'+id});
          Data.tenants = that.items;
        });
			}
		}
	                                           
    this.create = function () {
      var newTenant = new Tenants(that.tenant);

      newTenant.$save(function (data, headers) {
        that.items.push(data);
        that.showTenant(data);
      }, function (response) {
        console.log(response.data.errors);
      });
    } 
}]);
