class ConsolidateSoundPatternsAndSounds < ActiveRecord::Migration
  def change
    drop_table :sounds

    remove_column :sound_patterns, :sound_id

    add_column :sound_patterns, :file_name, :string
  end
end
