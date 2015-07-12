'use strict';

var app = angular.module('app');

app.controller('TasksIndexController', ['Data', 'Tasks', '$window', '$filter', function (Data, Tasks, $window, $filter) {
	var that = this;
	this.items = Data.tasks;
	this.task = {};
	this.modif = {};

	this.save = function (tid) {
		if (that.task.id) {
			that.update(that.task);
		} else {
			that.task.tenant_id = tid;
			that.create(that.task);
		}
		that.reset();
	}

	this.update = function (task) {
		Tasks.update({id: task.id}, task);
	}

	this.reset = function () {
		that.task = {};
	}

	this.destroy = function (id) {
		var confirm = $window.confirm('Voulez vous vraiment supprimer cette tâche ?');

		if (confirm) {
			Tasks.remove({id: id}, function () {
				that.items = $filter('filter')(that.items, {id: '!'+id});
				Data.tasks = that.items;
			});
		}
	}

	this.create = function () {
		var newTask = new Tasks(that.task);

		newTask.$save(function (data, headers) {
			that.items.push(data);
		}, function (response) {
			console.log(response.data.errors);
		});
	}

	this.toggleState = function (t) {
		that.modif = t;
		that.modif.state = !that.modif.state;
		that.update(that.modif);
	}
}]);