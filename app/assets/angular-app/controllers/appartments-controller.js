'use strict';

var app = angular.module('app');

app.controller('AppartmentsIndexController', ['Appartments', function (Appartments) {
	var that = this;
	this.items = Appartments.query();
}]);
/*
app.controller('BuildingDetailsController', ['$routeParams', 'Buildings', '$location', '$window',
	function ($routeParams, Buildings, $location, $window) {
		var that = this;
		this.building = {};
		this.modif = {};

		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.building = Buildings.get({id: $routeParams.id}, function () {
				that.modif = angular.copy(that.building);
			});
		}

		this.update = function(id) {
			that.building = angular.copy(that.modif);
			Buildings.update({id: id}, that.building);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer cet immeuble ?');

			if (confirm) {
				Buildings.remove({id: id}, function () {
					$location.url('/');
				});
			}
		}
}]);*/