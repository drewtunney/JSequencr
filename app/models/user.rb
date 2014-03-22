class User < ActiveRecord::Base
  validates_presence_of :name
  validates_presence_of :email
  validates :email, uniqueness: true
  validates_presence_of :password
  
  self.has_secure_password()
end
