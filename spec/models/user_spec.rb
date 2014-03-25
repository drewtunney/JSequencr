require 'spec_helper'

describe User do 
  before(:each) do
    User.create(
      name: "Roman Bolivar",
      email: "little_terror097@yahoo.com", 
      password: "astring", 
      password_confirmation: "astring"
      )
  end

  it { should validate_presence_of :name }
  it { should validate_presence_of :email }
  it { should validate_uniqueness_of :email}
  it { should validate_presence_of :password_digest }
  it { should have_many :songs}
end