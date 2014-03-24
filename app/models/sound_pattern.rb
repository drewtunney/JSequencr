class SoundPattern < ActiveRecord::Base
  belongs_to :song
  validates_presence_of :pattern
end
