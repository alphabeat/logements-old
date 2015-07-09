'use strict';

var app = angular.module('app');

app.controller('BuildingsIndexController', ['$routeParams', 'Data', 'Buildings', '$location', '$window',
	function ($routeParams, Data, Buildings, $location, $window) {
		var that = this;
		this.items = Data.buildings;
		this.building = {};
		this.modif = {};
		
		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.building = that.items[$routeParams.id - 1];
			that.modif = angular.copy(that.building);
		}

		this.update = function(id) {
			that.building = angular.copy(that.modif);
			Buildings.update({id: id}, that.building, function () {
				that.items = Data.buildings = Buildings.query();
			});
		}

		this.reset = function () {
			that.modif = angular.copy(that.building);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer cet immeuble ?');

			if (confirm) {
				Buildings.remove({id: id}, function () {
		          that.items = Data.buildings = Buildings.query();
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