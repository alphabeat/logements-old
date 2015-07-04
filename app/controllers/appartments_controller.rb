class AppartmentsController < ApplicationController
	before_action :get_appartment, :only => [:show, :edit, :update, :destroy]

	def get_appartment
		@appartment = Appartment.find(params[:id])
	end

	def index
		@appartments = Appartment.all

		respond_to do |format|
			format.html
			format.json { render json: @appartments }
		end
	end

	def show 
		respond_to do |format|
			format.html
			format.json { render json: @appartment }
		end
	end

	def new 
		@appartment = Appartment.new
	end

	def edit 
	end

	def create 
		@appartment = Appartment.create appartment_params
		redirect_to appartment_path @appartment
	end

	def update 
		@appartment.update appartment_params
		redirect_to appartment_path @appartment
	end

	def destroy
		@appartment.destroy
		redirect_to :action => 'index'
	end

	def appartment_params
		params.require(:appartment).permit([
				:building_id,
				:number,
				:area,
				:rent
			])
	end
end
