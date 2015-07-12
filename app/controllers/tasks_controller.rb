class TasksController < ApplicationController
	before_action :get_task, :only => [:show, :update, :destroy]

	def get_task
		@task = Task.find(params[:id])
	end

	def index
		@tasks = Task.all

		respond_to do |format|
			format.json {render json: @tasks}
		end
	end

	def show 
	end

	def new 
		@task = Task.new
	end

	def create
		@task = Task.create task_params
		render json: @task
	end

	def update
		@task.update task_params
		render json: @task
	end

	def destroy
		@task.destroy 
		render nothing: true
	end

	def task_params
		params.require(:task).permit([
			:tenant_id,
			:label,
			:dueto,
			:state
		])
	end
end
