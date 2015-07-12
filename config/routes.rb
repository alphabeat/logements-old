Rails.application.routes.draw do
  scope '/api' do 
    resources :buildings, :defaults => {format: :json}
    resources :appartments, :defaults => {format: :json}
    resources :tenants, :defaults => {format: :json}
    resources :suppliers, :defaults => {format: :json}
    resources :tasks, :defaults => {format: :json}
  end
  root to: 'home#index'
end
