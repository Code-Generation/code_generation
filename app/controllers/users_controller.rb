class UsersController < ApplicationController
  def new
  end

  def create
    # puts user_params
    user = User.new(user_params)

    if user.save 
      session[:user_id] = user.id
      redirect_to "/users/#{user.id}"
    else
      flash[:errors] = user.errors.full_messages
      redirect_to "/users/new"
    end

  end

  def show
    if !current_user

    elsif User.exists? id: params[:id]
      user = User.find(params[:id])
      if signed_in? and current_user.id == user.id
        @projects = @current_user.projects if @current_user.projects
      else
        deny_access
      end
    else
      deny_access
    end
  end

  def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
