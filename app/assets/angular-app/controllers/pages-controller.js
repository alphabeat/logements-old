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
		if (that.page == 1) 
			$location.url('/buildings/'+arr[1]);
		else if (that.page == 2)
			$location.url('/tenants/'+arr[1]);
	};
  
    this.resetMode = function () {
      	that.mode = null;
        if (that.page == 1) 
          $location.url('/buildings');
        else if (that.page == 2)
          $location.url('/tenants');
      }
}]);