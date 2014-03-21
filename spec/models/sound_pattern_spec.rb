require 'spec_helper'

  describe SoundPattern do 
    it { should validate_presence_of :pattern }
    it { should belong_to :sound }
  end