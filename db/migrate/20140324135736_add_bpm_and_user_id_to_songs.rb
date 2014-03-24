class AddBpmAndUserIdToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :user_id, :integer
    add_column :songs, :bpm, :integer
  end
end
