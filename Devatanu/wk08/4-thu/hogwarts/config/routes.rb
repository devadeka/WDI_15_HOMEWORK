Rails.application.routes.draw do

  
  resources :houses, only: [:index, :show]
  resources :students, only: [:index, :show, :new]

  get '/', to: "houses#index"
end
