require 'spec_helper'
require 'capybara/rspec'

describe "user can sign up", js: true do
  # before(:all) do
  #   Capybara.javascript_driver = :webkit
  # end

  it "can sign up" do 
      visit root_path
      find("h2#sign-up-link").click
      fill_in "signup-name", with: "Steve"
      fill_in "signup-email", with: "Steve@steve.com"
      fill_in "signup-password", with: "swordfish"
      fill_in "signup-password-confirmation", with: "swordfish"
      
      # save_and_open_page
      click_button "sign-up"
      steve = User.find_by(name: "Steve")
      expect(steve).to_not be_nil
      # expect(page).to have_content "Steve"
  end
end