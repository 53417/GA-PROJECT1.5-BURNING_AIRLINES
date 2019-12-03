Rails.application.routes.draw do
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]

     scope '/api/v1' do
       resources :users
     end
  
    # get 'users/index'
    # get 'users/create'
    # get 'users/update'
    # get 'users/destroy'
    # post 'authenticate', to: 'authentication#authenticate'
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'burning/destination_create' => 'burning#destination_create'
  get 'burning/destination_read' => 'burning#destination_read'
  get 'burning/destination_update' => 'burning#destination_update'
  get 'burning/destination_delete' => 'burning#destination_delete'

  get 'burning/flight_create' => 'burning#flight_create'
  get 'burning/flight_read' => 'burning#flight_read'
  get 'burning/flight_update' => 'burning#flight_update'
  get 'burning/flight_delete' => 'burning#flight_delete'

  get 'burning/plane_create' => 'burning#plane_create'
  get 'burning/plane_read' => 'burning#plane_read'
  get 'burning/plane_update' => 'burning#plane_update'
  get 'burning/plane_delete' => 'burning#plane_delete'

  get 'burning/seating_read' => 'burning#seating_read'
  get 'burning/seating_update' => 'burning#seating_update'

  get 'burning/user_read' => 'burning#user_read'

end
