'use strict';

var app = angular.module('app');

app.controller('BuildingsIndexController', ['Buildings', function (Buildings) {
	var that = this;
	this.items = Buildings.query();

	this.destroy = function (index) {
		Buildings.remove({id: that.items[index].id}, function () {
			that.items.splice(index, 1);
		});
	}
}]);