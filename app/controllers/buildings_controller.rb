class BuildingsController < ApplicationController
	before_action :get_building, :only => [:show, :edit, :update, :destroy]

	def get_building
		@building = Building.find(params[:id])
	end

	def index
		@buildings = Building.all

		respond_to do |format|
			format.html
			format.json { render json: @buildings }
		end
	end

	def show
		respond_to do |format|
			format.html
			format.json { render json: @building }
		end
	end

	def new 
		@building = Building.new
	end

	def edit
	end

	def create 
		@building = Building.create building_params
		redirect_to building_path @building
	end

	def update
		@building.update building_params
		redirect_to building_path @building
	end

	def destroy
		@building.destroy
		redirect_to :action => 'index'
	end

	def building_params
		params.require(:building).permit([
				:street_number,
				:street_type,
				:street_name,
				:zipcode,
				:city,
				:name,
				:number_of_appartments
			  ])
	end

end
