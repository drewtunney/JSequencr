class SoundPatternsController < ApplicationController
  def create
    @sound_pattern = SoundPattern.create(sound_pattern_params)
    render json: @sound_pattern
  end

private

  def sound_pattern_params
    params.permit(:pattern, :file_name, :song_id)
  end
end