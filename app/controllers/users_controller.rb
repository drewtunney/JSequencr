class UsersController < ApplicationController 

  def create
    @user = User.create(user_params)
    # no if/else statement for if @user.save
    # not sure if this is a big deal or not!
    session[:user_id] = @user.id
    render json: @user
  end

private

  def user_params
    params.permit(:email, :name, :password, :password_confirmation)
  end

end