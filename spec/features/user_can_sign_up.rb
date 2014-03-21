require 'spec_helper'

describe "user can sign up" do
  before(:all) do
    Capybara.javascript_driver = :webkit
  end

  it "can sign up", js: true do 
      visit root_path
      # save_and_open_page

      fill_in "name", with: "Steve"
      fill_in "email", with: "Steve@steve.com"
      fill_in "password", with: "swordfish"
      fill_in "password_confirmation", with: "swordfish"
      
      click_button "Sign up"

      expect(page).to have_content "Steve"
  end

end