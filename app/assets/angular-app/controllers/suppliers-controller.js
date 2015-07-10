'use strict';

var app = angular.module('app');

app.controller('SuppliersIndexController', ['Data', 'Suppliers', '$window', '$filter', function (Data, Suppliers, $window, $filter) {
	var that = this;
	this.items = Data.suppliers;
	this.supplier = {};
  
  console.log(this.items);
  
  this.showSupplier = function (supplier) {
    that.isShowVisible = true;
    that.supplier = supplier;
  }
  
  this.editSupplier = function () {
    that.isShowVisible = false;
    that.isEditVisible = true;
    that.modif = angular.copy(that.supplier);
  }
  
  this.newSupplier = function () {
    that.isShowVisible = false;
    that.isEditVisible = false;
    that.isNewVisible = true;
    that.supplier = {};
  }
  
  this.update = function (supplier) {
    Suppliers.update({id: supplier.id}, supplier);
  }
  
  this.cancel = function () {
    if (that.supplier.id) {
      that.isEditVisible = false;
      angular.extend(that.supplier, that.modif);
      that.showSupplier(that.supplier);
    } else {
      that.isNewVisible = false;
      that.supplier = {};
    }
  }
  
   this.save = function () {
    if (that.supplier.id) {
      that.isEditVisible = false;
      that.update(that.supplier);
      that.showSupplier(that.supplier);
    } else {
      that.isNewVisible = false;
      that.create();
    }
  }
   
  this.destroy = function (id) {
    var confirm = $window.confirm('Voulez-vous vraiment supprimer ce fournisseur ?');
    
    if (confirm) {
      Suppliers.remove({id: id}, function () {
        that.isShowVisible = false;
        that.items = $filter('filter')(that.items, {id: '!'+id});
        Data.suppliers = that.items;
      });
    }
  }
  
  this.create = function () {
    var newSupplier = new Suppliers(that.supplier);
    
    newSupplier.$save(function (data, headers) {
      that.items.push(data);
      that.showSupplier(data);
    }, function (response) {
      console.log(response.data.errors);
    });
  }
}]);