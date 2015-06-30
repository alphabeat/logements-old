class TenantsController < ApplicationController
	def index
		@tenants = Tenant.all
	end

	def show 
		@tenant = Tenant.find(params[:id])
	end

	def new 
		@tenant = Tenant.new
	end

	def edit
		@tenant = Tenant.find(params[:id])
	end

	def create
		@tenant = Tenant.create tenants_params
		redirect_to tenant_path @tenant
	end

	def update
		@tenant = Tenant.find(params[:id])
		@tenant.update tenants_params
		redirect_to tenant_path @tenant
	end

	def destroy
		Tenant.find(params[:id]).destroy
		redirect_to :action => 'index'
	end

	def tenants_params
		params.require(:tenant).permit([:firstname, :lastname, :age])
	end
end
