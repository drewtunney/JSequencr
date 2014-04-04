JSequencr::Application.routes.draw do

  root :to => "welcome#index"  

  resources :users, only: [:create]

  get "/login", to: "session#new"
  post "/session", to: "session#create"
  delete "/session", to: "session#destroy"

  get "/current_user", to: "session#current_user_return"

  resources :sound_patterns, only: [:create]

  resources :songs, only: [:create, :show, :update]

  get "user/:id/songs", to: "songs#show_user_songs"

  delete "clear_tracks/:id", to: "songs#clear_tracks"
  get "sound_patterns_of_song/:id", to: "songs#all_my_sound_patterns"

  # # PJ: Below is a suggeseted direction for your routes, to make them fit a more 
  # # RESTful convention. For more, see: http://guides.rubyonrails.org/routing.html
  # root "welcome#index"

  # # there is no reason to actually have a seperate get current user --
  # # you can have your root page load with a user_id on it if session
  # # is available, or when you log in you can dynamically add that
  # # user_id to the page
  # resource  :session, only: [:new, :create, :destroy] # singular resource

  # resources :users, only: [:create] do
  #   resources :songs, only: [:create, :index]
  # end

  # # can bre created either inside the context of a user or outside
  # resources :songs, only: [:create, :show, :update] do
  #   member do
  #     delete :sound_patterns, as: "destroy_patterns_in" # clears all tracks
  #     resources :sound_patterns, only: [:create, :index]
  #   end
  # end
  
  # # can bre created either inside the context of a song or outside
  # resources :sound_patterns, only: [:create]

end
