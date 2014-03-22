class WelcomeController < ApplicationController

  include AwsHelper

  def index
    
    @sounds = list_sounds
  end




end