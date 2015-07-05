app.controller('PagesController', ['$location', function ($location) {
		var that = this;
		this.page = 1;
		this.mode = null;

		this.switchView = function (page) {
			that.page = page;
			that.mode = null;
		};

		this.changeMode = function (mode, id) {
			that.mode = mode;
			$location.url('/tenants/'+id);
		};
	}]);