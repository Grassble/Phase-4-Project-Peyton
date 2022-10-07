Rails.application.routes.draw do
  resources :fantasies, only: [:index, :create, :destroy]
  resources :positions
  resources :teams, only: [:index]
  resources :players, only: [:index, :show, :create, :destroy, :update]
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
