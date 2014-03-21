class SoundPattern < ActiveRecord::Base
  belongs_to :sound
  validates_presence_of :pattern
end
