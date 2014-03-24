class SongsController < ApplicationController

  def create
    @song = Song.create(song_params)
    render json: @song
  end

  def clear_tracks
    @song = Song.find(params[:id])
    @song.sound_patterns.destroy_all
    render json: @song.sound_patterns
  end

  def show
    render json: Song.find(params[:id])
  end

  def all_my_sound_patterns
    @song = Song.find(params[:id])
    render json: @song.sound_patterns
  end

  private
  def song_params
    params.permit(:name, :user_id, :bpm, :title)
  end

end