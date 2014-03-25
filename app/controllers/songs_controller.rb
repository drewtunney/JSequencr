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

  def update
    @song = Song.find(params[:id])
    @song.update(update_params)
    render json: @song
  end

  def all_my_sound_patterns
    @song = Song.find(params[:id])
    render json: @song.sound_patterns
  end

  def show_user_songs
    @songs = Song.where(user_id: params[:id])
    render json: @songs
  end

  private
  def song_params
    params.permit(:user_id, :bpm, :title)
  end

  def update_params
    params.permit(:bpm, :title)
  end

end