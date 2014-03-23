class AddSongIdToSoundPatterns < ActiveRecord::Migration
  def change
    add_column :sound_patterns, :song_id, :integer
  end
end
