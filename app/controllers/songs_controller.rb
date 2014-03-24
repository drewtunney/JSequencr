class SongsController < ApplicationController

  def create
    @song = Song.create(song_params)
    render json: @song
  end

  private
  def song_params
    params.permit(:name, :user_id, :bpm, :title)
  end

end