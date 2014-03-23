class ChangeSoundPatternsToTakeFilename < ActiveRecord::Migration
  def change
    remove_column :sound_patterns, :sound_id

    add_column :sound_patterns, :file_name, :string
  end
end
