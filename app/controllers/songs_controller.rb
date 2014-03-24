class SongsController < ApplicationController

  def create
    @song = Song.create(song_params)
  end

  private
  def song_params
    params.permit(:name, :user_id)
  end

end