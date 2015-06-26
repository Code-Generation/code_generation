class WelcomeController < ApplicationController
  def index
    #reset_session
    if signed_in?
      current_user
      redirect_to "/users/#{@current_user.id}"
    end
  end
end
