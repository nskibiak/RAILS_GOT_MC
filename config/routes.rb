Rails.application.routes.draw do
  # devise_for :users
  # replacing original devise line with omniauth specifications
  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}

  root to: 'grants#index'

  get 'grants/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
