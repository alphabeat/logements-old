'use strict';

var app = angular.module('app');

app.controller('AppartmentsIndexController', ['Appartments', function (Appartments) {
	var that = this;
	this.items = Appartments.query();
}]);

app.controller('AppartmentsDetailsController', ['$routeParams', 'Appartments', '$location', '$window',
	function ($routeParams, Appartments, $location, $window) {
		var that = this;
		this.appartment = {};
		this.modif = {};

		if ($routeParams.id !== undefined && $routeParams.id !== 'new') {
			that.appartment = Appartments.get({id: $routeParams.id}, function () {
				that.modif = angular.copy(that.appartment);
			});
		}

		this.update = function(id) {
			that.appartment = angular.copy(that.modif);
			Appartments.update({id: id}, that.appartment);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer cet appartement ?');

			if (confirm) {
				Appartments.remove({id: id}, function () {
					$location.url('/');
				});
			}
		}
}]);