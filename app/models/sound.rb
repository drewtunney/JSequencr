class Sound < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :url
  has_many :sound_patterns

end
