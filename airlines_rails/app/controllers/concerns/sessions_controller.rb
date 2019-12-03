class SessionsController < ApplicationController
    def create
        user = User
                .find_by(email: params["users"]["email"])
                .try(:authenticate, params["user"]["password"])
        if user 
            sesson[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
        else 
            render json: { status: 401}
        end
    end
end