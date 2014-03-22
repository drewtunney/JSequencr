class Song < ActiveRecord::Base
  validates_presence_of :title
  has_many :sounds


end
