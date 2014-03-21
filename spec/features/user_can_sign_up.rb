require 'spec_helper'

describe "user can sign up" do
  before(:all) do
    Capybara.javascript_driver = :webkit
  end

  it "can sign up", js: true do 
      visit root_path
      

      fill_in "name", with: "Steve"
      fill_in "email", with: "Steve@steve.com"
      fill_in "password", with: "swordfish"
      fill_in "password_confirmation", with: "swordfish"
      # save_and_open_page
      click_button "submit"
      steve = User.find_by(name: "Steve")
      expect(steve).to_not be_nil
      # expect(page).to have_content "Steve"
  end

end