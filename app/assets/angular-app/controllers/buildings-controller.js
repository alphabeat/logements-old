'use strict';

var app = angular.module('app');

app.controller('BuildingsIndexController', ['$routeParams', 'Buildings', '$location', '$window',
	function ($routeParams, Buildings, $location, $window) {
		var that = this;
		this.items = Buildings.query();
		this.building = {};
		this.modif = {};
		
		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.building = Buildings.get({id: $routeParams.id}, function () {
				that.modif = angular.copy(that.building);
		  	});
		}

		this.update = function(id) {
			that.building = angular.copy(that.modif);
			Buildings.update({id: id}, that.building, function () {
				that.items = Buildings.query();
			});
		}

		this.reset = function () {
			that.modif = angular.copy(that.building);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer cet immeuble ?');

			if (confirm) {
				Buildings.remove({id: id}, function () {
          that.items = Buildings.query();
        });
			}
		}

		this.create = function () {
			var newBuilding = new Buildings(that.building);

			newBuilding.$save(function () {
				$location.url('/buildings');
			}, function (response) {
				console.log(response.data.errors);
			});
		}
}]);