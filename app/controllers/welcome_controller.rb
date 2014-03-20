class WelcomeController < ApplicationController

  include AwsHelper

  def index
    @buckets = list_buckets

    @sounds = list_sounds

    @song = song_getter
  end




end