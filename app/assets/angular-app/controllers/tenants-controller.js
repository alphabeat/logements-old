'use strict';

var app = angular.module('app');

app.controller('TenantsIndexController', ['Data', 'Tenants', '$window', '$filter', '$scope', function (Data, Tenants, $window, $filter, $scope) {
		var that = this;
		this.items = Data.tenants;
    this.buildings = Data.buildings;
    this.appartments = Data.appartments;
		this.tenant = {};
		this.modif = {};
		this.showModal = false;

		this.toggleModal = function () {
			that.showModal = !that.showModal;
		}

    this.showTenant = function (tenant) {
      that.isShowVisible = true;
      that.isEditVisible = false;
      that.isNewVisible = false;
      that.tenant = tenant;
    }

    this.editTenant = function () {
      that.isShowVisible = false;
      that.isEditVisible = true;
      that.modif = angular.copy(that.tenant);
    }

    this.newTenant = function () {
      that.isShowVisible = false;
      that.isEditVisible = false;
      that.isNewVisible = true;
      that.tenant = {};
    }

		this.update = function (tenant) {
	    	Tenants.update({id: tenant.id}, tenant);
		}

    this.cancel = function () {
      if (that.tenant.id) {
        that.isEditVisible = false;
        angular.extend(that.tenant, that.modif);
        that.showTenant(that.tenant);
      } else if (that.tenant.id === undefined) {
        that.isNewVisible = false;
        that.tenant = {};
      }
    }

    this.save = function () {
      if (that.tenant.id) {
        that.isEditVisible = false;
        that.update(that.tenant);
        that.showTenant(that.tenant);
      } else {
        that.isNewVisible = false;
        that.create();
      }
    }

		this.destroy = function (id) {
			var confirm = $window.confirm('Voulez-vous vraiment supprimer ce locataire ?');

			if (confirm) {
				Tenants.remove({id: id}, function () {
          that.isShowVisible = false;
          that.items = $filter('filter')(that.items, {id: '!'+id});
          Data.tenants = that.items;
        });
			}
		}

    this.create = function () {
      var newTenant = new Tenants(that.tenant);

      newTenant.$save(function (data, headers) {
        that.items.push(data);
        that.showTenant(data);
      }, function (response) {
        console.log(response.data.errors);
      });
    }

    this.hasPaid = function (bool) {
      if (!bool) {
        var confirm = $window.confirm("Êtes vous sûr de vouloir annuler le paiement ?");

        if (!confirm)
          return;
      }
      that.tenant.haspaid = bool;
      that.update(that.tenant);
    }

/*    this.getAppt = function (apptID) {
      that.appartments.forEach(function (appt, index, array) {
        if (appt.id == apptID) {
          console.log(appt.number);
          return appt.number;
        }
      });
    }*/

    this.topicCAF = function (tenant) {
      return 'Informations concernant '+tenant.firstname+' '+tenant.lastname;
    }

    this.bodyCAF = function (tenant, address) {
      var cafMsg = 'Bonjour, %0D%0A';
      cafMsg += 'Voici les informations concernant '+tenant.firstname+' '+tenant.lastname+' : %0D%0A';
      cafMsg += '- Adresse : '+address.street_number+', '+address.street_type+' '+address.street_name+' - ';
      cafMsg += address.zipcode+' '+address.city+'%0D%0A';
      cafMsg += '- Entrée le : '+$filter('date')(tenant.startdate, 'dd/MM/yyyy')+'%0D%0A';
      cafMsg += '- Sortie prévue le : '+$filter('date')(tenant.enddate, 'dd/MM/yyyy')+'%0D%0A';
      cafMsg += '- Téléphone : 0'+tenant.phone+'%0D%0A';
      cafMsg += '- Adresse des parents : '+tenant.parentsaddress+'%0D%0A';
      cafMsg += '- Téléphone des parents : 0'+tenant.parentsphone+'%0D%0A';
      cafMsg += '%0D%0A'+tenant.firstname + ((tenant.haspaid) ? ' est à jour de ses loyers.' : ' n\'a pas encore payé ce mois ci.');

      return cafMsg;
    }

    this.remindRent = function (firstname) {
      var remindRentMsg = 'Bonjour '+firstname+', %0D%0A';
      remindRentMsg += 'Je constate que vous n\'avez pas encore payé votre loyer ce mois-ci. %0D%0A';
      remindRentMsg += 'Rappelez moi au 06 62 18 66 94 afin d\'en discuter.%0D%0A';
      remindRentMsg += '%0D%0AMerci d\'avance, %0D%0A';

      return remindRentMsg;
    }

    this.sendEmail = function(email, subject, body) {
      var link = "mailto:"+ email
               + "?subject=" + escape(subject)
               + "&body=" + body;

      window.location.href = link;
    }
}]);
