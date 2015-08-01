'use strict';

var app = angular.module('app');

app.controller('AppartmentsIndexController', ['Data', 'Appartments', '$window', '$filter',
	function (Data, Appartments, $window, $filter) {
		var that = this;
		this.items = Data.appartments;
		this.appartment = {};
		this.new_appartment = {};
		this.modif = {};

		this.editAppartment = function (appartment) {
			that.appartment = appartment;
			that.modif = angular.copy(that.appartment);
		}

		this.update = function(appartment) {
			Appartments.update({id: appartment.id}, appartment);
		}

		this.cancel = function () {
			if (that.appartment.id) {
				angular.extend(that.appartment, that.modif);
				that.appartment = {};
			} else if (that.new_appartment) {
				that.new_appartment = {};
			}
		}
    
	    this.save = function (bid) {
	      if (that.appartment.id) {
	        that.update(that.appartment);
	      } else if (that.new_appartment.number !== undefined) {
	        that.new_appartment.building_id = bid;
	        that.create();
	      }
	      that.reset();
	    }

		this.reset = function () {
			that.new_appartment = {};
		}

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez vous vraiment supprimer cet appartement ?');

			if (confirm) {
				Appartments.remove({id: id}, function () {
					Data.appartments = that.items = $filter('filter')(that.items, {id: '!'+id});
				});
			}
		}

		this.create = function () {
			var newAppart = new Appartments(that.new_appartment);

			newAppart.$save(function (data, headers) {
				that.items.push(data);
			}, function (response) {
				console.log(response.data.errors);
			});
		}
}]);