class TenantsController < ApplicationController
	before_action :get_tenant, :only => [:show, :edit, :update, :destroy]

	def get_tenant
		@tenant = Tenant.find(params[:id])
	end

	def index
		@tenants = Tenant.all
	end

	def show 
		@birthdate = display_date @tenant.birthdate
	end

	def new 
		@tenant = Tenant.new
	end

	def edit
		@birthdate = display_date @tenant.birthdate
	end

	def create
		@tenant = Tenant.create tenants_params
		redirect_to tenant_path @tenant
	end

	def update
		@tenant.update tenants_params
		redirect_to tenant_path @tenant
	end

	def destroy
		@tenant.destroy
		redirect_to :action => 'index'
	end

	def tenants_params
		params.require(:tenant).permit([
			:firstname, 
			:lastname, 
			:birthdate,
			:phone,
			:parentsphone,
			:email,
			:startdate,
			:enddate,
			:cafamount,
			:rent,
			:internet,
			:solde
		])
	end

	def display_date date
		str = date.day.to_s + '/' + date.mon.to_s + '/' + date.year.to_s
		return str
	end
end
