class RemoveSoundIdFromSongs < ActiveRecord::Migration
  def change
    remove_column :songs, :sound_id
  end
end
