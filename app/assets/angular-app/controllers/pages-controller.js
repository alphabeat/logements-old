app.controller('PagesController', ['$location', function ($location) {
		var that = this;
		this.page = 1;
		this.mode = null;

		this.switchView = function (page) {
			that.page = page;
			that.mode = null;
		};

		this.changeMode = function (arr) {
			that.mode = arr;
			$location.url('/tenants/'+arr[1]);
		};
  
    this.resetMode = function () {
      that.mode = null;
      $location.url('/tenants');
    }
	}]);