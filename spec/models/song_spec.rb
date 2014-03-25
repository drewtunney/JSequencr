require 'spec_helper'

describe Song do
  it { should validate_presence_of :title }
  it { should have_many :sound_patterns }
end