class SuppliersController < ApplicationController
	before_action :get_supplier, :only => [:update, :destroy]

	def get_supplier
		@supplier = Supplier.find(params[:id])
	end

	def index
		@suppliers = Supplier.all

		respond_to do |format|
			format.json { render json: @suppliers }
		end
	end

	def create
		@supplier = Supplier.create supplier_params
   		render json: @supplier
	end

	def update
		@supplier.update supplier_params
		render nothing: true
	end

	def destroy
		@supplier.destroy
		render nothing: true
	end

	def supplier_params
		params.require(:supplier).permit([
			:name,
			:company,
			:profession,
			:phone,
			:address
		])
	end
end
