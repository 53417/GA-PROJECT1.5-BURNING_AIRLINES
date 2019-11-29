class ApplicationController < ActionController::Base


    def login
        @logged_in_user = User.find_by :id => session[:user_id]
    end

    def plane_create
        # plane_create?plane_name=another+plane&rows=10&cols=2
        new_plane = Plane.new
        new_plane.plane_name = params[:plane_name]
        new_plane.rows = params[:rows]
        new_plane.cols = params[:cols]
        new_plane.total_seat = params[:rows] * params[:cols]
        new_plane.save
    end

    def plane_read
        @planes = ActiveRecord::Base.connection.exec_query("SELECT * FROM planes")
    end

    def plane_update
        plane = Plane.find_by :id => params[:plane_id]
        plane.plane_name = params[:plane_name]
        plane.rows = params[:rows]
        plane.cols = params[:cols]
        plane.total_seat = params[:rows] * params[:cols]
        plane.save

    end

    def plane_delete
        plane = Plane.find_by :id => params[:plane_id]
        plane.destroy
        #flights = Flight.where({plane_id: params[:plane_id]})
        #flights.each{|flight| flight.destroy}
        #seats = Seating.where({plane_id: params[:plane_id]})
    end

    include Knock::Authenticable

    # before_action :authenticate_user, except: [:index]
    # Resources can now be secured by calling authenticate_user as a before_action inside your controllers

    # You can access the current user in your controller with current_user.
    # def index
    #     if current_user
    #       # do something
    #     else
    #       # do something else
    #     end
    #   end

end

