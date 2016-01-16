'use strict';

var app = angular.module('app');

app.controller('BuildingsIndexController', ['Data', 'Buildings', '$window', '$filter', function (Data, Buildings, $window, $filter) {
	var that = this;
	this.items = Data.buildings;
	this.tenants = Data.tenants;
	this.building = {};
	this.modif = {};
	this.selected = -1;

	this.showBuilding = function (index, building) {
		that.isShowVisible = true;
		that.isEditVisible = false;
		that.isNewVisible = false;
		that.building = building;
		that.selected = index;
	}

	this.editBuilding = function () {
		that.isShowVisible = false;
		that.isEditVisible = true;
		that.modif = angular.copy(that.building);
	}

	this.newBuilding = function () {
		that.isShowVisible = false;
		that.isEditVisible = false;
		that.isNewVisible = true;
		that.building = {};
	}

	this.update = function(building) {
		Buildings.update({id: building.id}, building);
	}

	this.cancel = function () {
		if (that.building.id) {
			that.isEditVisible = false;
			angular.extend(that.building, that.modif);
			that.showBuilding(that.selected, that.building);
		} else {
			that.isNewVisible = false;
			that.building = {};
		}
	}

	this.save = function () {
		if (that.building.id) {
			that.isEditVisible = false;
			that.update(that.building);
			that.showBuilding(that.selected, that.building);
		} else {
			that.isNewVisible = false;
			that.create();
		}
	}

	this.destroy = function (id) {
		var confirm = $window.confirm('Voulez-vous vraiment supprimer cet immeuble ?');

		if (confirm) {
			Buildings.remove({id: id}, function () {
      			that.isShowVisible = false;
      			that.items = $filter('filter')(that.items, {id: '!'+id});
            Data.buildings = that.items;
    		});
		}
	}

	this.create = function () {
		var newBuilding = new Buildings(that.building);

		newBuilding.$save(function (data, headers) {
   			that.items.push(data);
   			that.showBuilding(that.selected, data);
		}, function (response) {
			console.log(response.data.errors);
		});
	}
}]);
