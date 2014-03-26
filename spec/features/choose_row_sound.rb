require 'spec_helper'

describe "a user can select a specific sound for a row" do
  before(:all) do
    Capybara.javascript_driver = :webkit
  end

  it "starts out with no rows" do 
    visit root_path
    expect(page).to_not have_content("div.note")
  end
  
  # it "selects the sound for the first row", js: true do 

  #   visit root_path
  #   find(".add-row").click
  #   # save_and_open_page
  #   within "div.all-sounds" do
  #     find("li.sound-choices").first().click
  #     expect(page).to have_content('div.note')
  #   end

  # end


end