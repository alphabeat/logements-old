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

	def create
		@tenant = Tenant.create tenants_params
		redirect_to tenant_path @tenant
	end

	def tenants_params
		params.require(:tenant).permit([:firstname, :lastname, :age])
	end
end
