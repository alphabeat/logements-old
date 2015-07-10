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
    render json: @building
	end

	def update
		@building.update building_params
		render nothing: true
	end

	def destroy
		@building.destroy
    	render nothing: true
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
