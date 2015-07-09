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