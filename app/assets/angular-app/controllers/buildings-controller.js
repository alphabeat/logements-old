'use strict';

var app = angular.module('app');

app.controller('BuildingsIndexController', ['$routeParams', 'Data', 'Buildings', '$location', '$window', 'filterFilter',
	function ($routeParams, Data, Buildings, $location, $window, filterFilter) {
		var that = this;
		this.items = Data.buildings;
		this.building = {};
		this.modif = {};
    this.buildingToEdit = {};
		
		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.building = filterFilter(that.items, {id: $routeParams.id});
      that.buildingToEdit = angular.copy(that.building);
		}

		this.update = function(id) {
			Buildings.update({id: id}, that.modif, function () {
				that.items = Data.buildings = Buildings.query(function () {
          that.building = filterFilter(that.items, {id: id});
        });
			});
		}

		this.reset = function () {
			that.buildingToEdit = angular.copy(that.building);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer cet immeuble ?');

			if (confirm) {
				var remove = Buildings.remove({id: id}, function () {
          that.items = Buildings.query();
        });
			}
		}

		this.create = function () {
			var newBuilding = new Buildings(that.building);

			newBuilding.$save(function () {
        that.items = Data.buildings = Buildings.query();
				$location.url('/buildings');
			}, function (response) {
				console.log(response.data.errors);
			});
		}
}]);