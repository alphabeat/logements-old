'use strict';

var app = angular.module('app');

app.factory('Buildings', ['$resource', function ($resoure) {
	return $resoure(
		'/api/buildings/:id', 
		{ id: '@id' }
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
  )
}]);