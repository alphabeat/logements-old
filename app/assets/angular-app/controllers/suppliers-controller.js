'use strict';

var app = angular.module('app');

app.controller('SuppliersIndexController', ['Data', 'Suppliers', function (Data, Suppliers) {
	var that = this;
	this.items = Data.suppliers;
	this.supplier = {};
}]);