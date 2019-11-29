class ApplicationController < ActionController::Base
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