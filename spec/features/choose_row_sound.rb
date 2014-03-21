require 'spec_helper'

describe "a user can select a specific sound for a row" do
  
  it "selects the sound for the first row" do 

    visit root_path
    within ".sound-selection" do
      expect(page).to have_select('ping')
    end

  end


end