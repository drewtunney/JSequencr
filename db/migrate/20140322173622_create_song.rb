class CreateSong < ActiveRecord::Migration
  def change
    create_table :song do |t|
      t.string :title
      t.references :sound

      t.timestamps
    end
  end
end
