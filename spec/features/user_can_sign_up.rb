require 'spec_helper'

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
      click_button "sign-up"
      # save_and_open_page
      # User.create({name: "Steve", email: "Steve", password: "pw", password_confirmation: "pw"})
      # steve = User.find_by(name: "Steve")
      expect(page).to have_content("Let's Get Weird")
      # expect(page).to have_content "Steve"
  end

end