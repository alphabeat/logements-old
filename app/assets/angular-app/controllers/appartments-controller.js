'use strict';

var app = angular.module('app');

app.controller('AppartmentsIndexController', ['$routeParams', 'Data', 'Appartments', '$location', '$window', '$filter',
	function ($routeParams, Data, Appartments, $location, $window, $filter) {
		var that = this;
		this.items = Data.appartments;
		this.appartment = {};
		this.modif = {};

		this.update = function(appartment) {
			Appartments.update({id: id}, appartment);
		}
    
    this.save = function (bid) {
      if (that.appartment.id) {
        that.update(that.appartment);
      } else {
        that.appartment.building_id = bid;
        that.create();
      }
      that.reset();
    }

		this.reset = function () {
			that.appartment = {};
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer cet appartement ?');

			if (confirm) {
				Appartments.remove({id: id}, function () {
					Data.appartments = that.items = $filter('filter')(that.items, {id: '!'+id});
				});
			}
		}

		this.create = function () {
			var newAppart = new Appartments(that.appartment);

			newAppart.$save(function (data, headers) {
				that.items.push(data);
			}, function (response) {
				console.log(response.data.errors);
			});
		}
}]);