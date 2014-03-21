class CreateSoundPatterns < ActiveRecord::Migration
  def change
    create_table :sound_patterns do |t|
      t.string :pattern
      t.references :sound, index: true

      t.timestamps
    end
  end
end
