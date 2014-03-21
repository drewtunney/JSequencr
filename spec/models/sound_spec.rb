require 'spec_helper'

  describe Sound do 
    it { should validate_presence_of :name }
    it { should validate_presence_of :url }
    it { should have_many :sound_patterns }
  end
