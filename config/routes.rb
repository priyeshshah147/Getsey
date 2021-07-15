Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
    namespace :api, defaults: {format: :json} do
      resource :user, only: [:create]
      resource :session, only: [:create, :destroy, :show]
      resources :products, only: [:create, :show, :index] do
        resources :reviews ,only: [:index, :create]
      end
      resources :reviews ,only: [ :destroy, :update, :show]
    end
end
 