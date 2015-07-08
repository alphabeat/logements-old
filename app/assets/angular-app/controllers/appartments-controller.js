'use strict';

var app = angular.module('app');

app.controller('AppartmentsIndexController', ['$routeParams', 'Appartments', '$location', '$window',
	function ($routeParams, Appartments, $location, $window) {
		var that = this;
		this.items = Appartments.query();
		this.appartment = {};
		this.modif = {};

		this.update = function(id) {
			that.appartment = angular.copy(that.modif);
			Appartments.update({id: id}, that.appartment, function () {
				this.items = Appartments.query();
			});
		}

		this.reset = function () {
			that.modif = angular.copy(that.appartment);
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer cet appartement ?');

			if (confirm) {
				Appartments.remove({id: id}, function () {
					that.items = Appartments.query();
					console.log('OK');
				});
			}
		}

		this.create = function (bid) {
			that.appartment.building_id = bid;
			var newAppart = new Appartments(that.appartment);

			newAppart.$save(function () {
				that.appartment = {};
				that.items = Appartments.query();
			}, function (response) {
				console.log(response.data.errors);
			});
		}
}]);