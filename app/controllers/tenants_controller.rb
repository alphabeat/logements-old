class TenantsController < ApplicationController
	before_action :get_tenant, :only => [:show, :edit, :update, :destroy]

	def get_tenant
		@tenant = Tenant.find(params[:id])
	end

	def index
		@tenants = Tenant.all

		respond_to do |format|
			format.html
			format.json { render json: @tenants }
		end
	end

	def show 
		respond_to do |format|
			format.html
			format.json { render json: @tenant }
		end
	end

	def new 
		@tenant = Tenant.new
	end

	def edit
	end

	def create
		@tenant = Tenant.create tenants_params
    render json: @tenant
	end

	def update
		@tenant.update tenants_params
    	render nothing: true
	end

	def destroy
		@tenant.destroy
    	render nothing: true
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
			:solde,
      		:haspaid,
			:appartment_id
		])
	end
end