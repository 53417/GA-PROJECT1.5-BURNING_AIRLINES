class ApplicationController < ActionController::Base
    # include Knock::Authenticable

    def login
        @logged_in_user = User.find_by :id => session[:user_id]
    end

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

