module CurrentUserConcern
    extend ActiveSupport::Concern

        include do
            before_action :set_current_user
        end

        def set_current_usder
            if session[:user_id]
            @current_user = User.find(session[:user_id])
        end
    end 
end