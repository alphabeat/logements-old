'use strict';

var app = angular.module('app');

app.factory('Appartments', ['$resource', function ($resource) {
  return $resource(
    'api/appartments/:id',
    {id: '@id'},
    {
      get: {method: 'GET'},
      query: {method: 'GET', isArray: true},
      'update': {method: 'PUT'}
    }
  );
}]);

app.factory('Buildings', ['$resource', function ($resource) {
	return $resource(
		'/api/buildings/:id', 
		{ id: '@id' },
    {
      get: {method: 'GET'},
      query: {method: 'GET', isArray: true},
      'update': {method: 'PUT'}
    }
	);
}]);

app.factory('Tenants', ['$resource', function ($resource) {
  return $resource(
    '/api/tenants/:id',
    {id: '@id'},
    {
      get: {method: 'GET'},
      query: {method: 'GET', isArray: true},
      'update': {method: 'PUT'}
    }
  );
}]);

app.factory('Suppliers', ['$resource', function ($resource) {
  return $resource(
    '/api/suppliers/:id',
    {id: '@id'},
    {
      get: {method: 'GET'},
      query: {method: 'GET', isArray: true},
      'update': {method: 'PUT'}
    }
  );
}]);

app.factory('Data', ['Tenants', 'Buildings', 'Appartments', 'Suppliers', function (Tenants, Buildings, Appartments, Suppliers) {
  var data = {};
  
  if (!data.tenants)
    data.tenants = Tenants.query();
  
  if (!data.buildings)
    data.buildings = Buildings.query();
  
  if (!data.appartments)
    data.appartments = Appartments.query();
 
  if(!data.suppliers)
    data.supppliers = Suppliers.query();
  
  return data;
}]);