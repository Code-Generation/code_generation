class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new
    user.username = params[:username]
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]

    if user.save 
      session[:user_id] = user.id
      redirect_to "/users/#{user.id}"
    else
      flash[:errors] = user.errors.full_messages
      redirect_to "/users/new"
    end

  end

  def show
    # @user = User.find(params[:id])
    current_user
    @projects = @current_user.projects
  end
end
