'use strict';

var app = angular.module('app');

app.controller('SuppliersIndexController', ['Suppliers', function (Suppliers) {
	var that = this;
	this.items = Suppliers.query();
	this.supplier = {};
}]);