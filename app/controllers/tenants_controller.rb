class TenantsController < ApplicationController
	before_action :get_tenant, :only => [:show, :edit, :update, :destroy]

	def get_tenant
		@tenant = Tenant.find(params[:id])
	end

	def index
		@tenants = Tenant.all
	end

	def show 
	end

	def new 
		@tenant = Tenant.new
	end

	def edit
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
		params.require(:tenant).permit([:firstname, :lastname, :age])
	end
end
