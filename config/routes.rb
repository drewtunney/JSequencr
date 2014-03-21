JSequencr::Application.routes.draw do

  root :to => "welcome#index"  

  resources :users, only: [:create]

end
