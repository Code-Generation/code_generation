class ProjectsController < ApplicationController
  def new
    # puts params[:id]
    if params[:id]
      course = Course.find(params[:id])
      @course_id = course.id
      @course = course.name
      if course.challenges != nil
        @challenges = course.challenges.split(',')
      end
      current_user
    end
    render layout: 'editor'
  end

  def create
    project = Project.new
    project.user = User.find(session[:user_id])
    project.description = params[:description]
    project.code = params[:code]
    project.name = params[:name]

    if project.save
      # session[:deployed] = "New project deployed!";
      render json: {:status => true, :project_url => "http://#{request.host_with_port}/p/#{project.id}", :project_id => project.id}
      # redirect_to "/projects/#{project.id}"
    else
      render json: {:status => true, :error_messages => project.errors.full_messages}
    end
  end

  def show
    current_user
    @project = Project.find(params[:id])
  end
end
