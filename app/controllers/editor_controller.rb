class EditorController < ApplicationController
  def index
  	if session[:user_id]
	    @editor = 'test'
	    current_user
	else
		redirect_to "/sessions/new"
	end
  end
end
