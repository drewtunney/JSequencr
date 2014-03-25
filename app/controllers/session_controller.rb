class SessionController < ApplicationController 

  def new
  end

  def create
    user = User.find_by(email: params[:email])

    if user && (user.authenticate(params[:password]) ) 
      
      session[:user_id] = user.id
      render json: user
    else
      if user.nil?
        error = "User doesn't exist."
      else
        error = "Sorry, password authentication failed."
      end
      render json: { :errors => error }
    end
    
  end

  def destroy
    session[:user_id] = nil
    render json: current_user
  end

  def current_user_return
    render json: current_user
  end


end