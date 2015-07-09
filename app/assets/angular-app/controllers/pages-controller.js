app.controller('PagesController', ['$location', function ($location) {
	var that = this;
	this.page = 1;

	this.switchView = function (page) {
		that.page = page;
	};
}]);