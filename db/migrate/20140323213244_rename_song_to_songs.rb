class RenameSongToSongs < ActiveRecord::Migration
  def change
    rename_table :song, :songs
  end
end
