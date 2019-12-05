class BurningController < ApplicationController
    #skip_before_action :verify_authenticity_token
    #DESTINATIONS
    def destination_create
        new_destination = Desination.new
        new_destination.destination = params[:destination]
        new_destination.save
        redirect_to :controller => 'burning', :action => 'destination_read'
    end

    def destination_read
        @destinations = ActiveRecord::Base.connection.exec_query("SELECT * FROM destinations")
        render json: @destinations
    end

    def destination_update
        destination = Destination.find_by :id => params[:destination_id]
        destination.destination = params[:destination]
        destination.save
        redirect_to :controller => 'burning', :action => 'destination_read'
    end

    def destination_delete
        destination = Destination.find_by :id => params[:destination_id]
        destination.destroy
        redirect_to :controller => 'burning', :action => 'destination_read'
    end

    #FLIGHTS
    def flight_create
        # flight_create?plane_id=X&fly_from=X&fly_to=X&fly_time=X
        new_flight = Flight.new
        new_flight.plane_id = params[:plane_id]
        new_flight.fly_from = params[:fly_from]
        new_flight.fly_to = params[:fly_to]
        new_flight.fly_time = params[:fly_time]
        new_flight.save
        plane = Plane.find_by :id => params[:plane_id]

        redirect_to :controller => 'burning', :action => 'flight_read'
    end

    def flight_read
        @flights = ActiveRecord::Base.connection.exec_query("SELECT * FROM flights")
        render json: @flights
    end

    def flight_update
        flight = Flight.find_by :id => params[:flight_id]
        flight.flight = params[:flight]
        flight.save
        redirect_to :controller => 'burning', :action => 'flight_read'
    end

    def flight_delete
        flight = flight.find_by :id => params[:flight_id]
        flight.destroy
        redirect_to :controller => 'burning', :action => 'flight_read'
    end

    # PLANES
    def plane_create
        # plane_create?plane_name=another+plane&rows=10&cols=2
        new_plane = Plane.new
        new_plane.plane_name = params[:plane_name]
        new_plane.rows = params[:rows]
        new_plane.cols = params[:cols]
        new_plane.total_seat = params[:rows].to_i * params[:cols].to_i
        new_plane.save
        redirect_to :controller => 'burning', :action => 'plane_read'
    end

    def plane_read
        @planes = ActiveRecord::Base.connection.exec_query("SELECT * FROM planes")
        render json: @planes
    end

    def plane_update
        plane = Plane.find_by :id => params[:plane_id]
        plane.plane_name = params[:plane_name]
        plane.rows = params[:rows]
        plane.cols = params[:cols]
        plane.total_seat = params[:rows] * params[:cols]
        plane.save
        redirect_to :controller => 'burning', :action => 'plane_read'
    end

    def plane_delete
        plane = Plane.find_by :id => params[:plane_id]
        plane.destroy
        redirect_to :controller => 'burning', :action => 'plane_delete'
        #flights = Flight.where({plane_id: params[:plane_id]})
        #flights.each{|flight| flight.destroy}
        #seats = Seating.where({plane_id: params[:plane_id]})
    end

    #SEATING
    def seating_read
        @seatings = ActiveRecord::Base.connection.exec_query("SELECT * FROM seatings")
        render json: @seatings
    end

    def seating_update
        seating = seatings.find_by :id => params[:seating_id]
        seating.flight_id = params[:flight_id]
        seating.booked = params[:booked]
        seating.user_id = params[:user_id]
        seating.save
        redirect_to :controller => 'burning', :action => 'seating_read'
    end

    #USERS
    def user_read
        @users = ActiveRecord::Base.connection.exec_query("SELECT * FROM users")
        render json: @users
    end

end
