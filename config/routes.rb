Rails.application.routes.draw do
  scope '/api' do 
    resources :buildings, :defaults => {format: :json}
    resources :appartments, :defaults => {formats: :json}
    resources :tenants, :defaults => {format: :json}
  end
  root to: 'home#index'
end
