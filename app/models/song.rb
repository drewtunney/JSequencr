class Song < ActiveRecord::Base
  validates_presence_of :title
  has_many :sound_patterns
  belongs_to :user


end
