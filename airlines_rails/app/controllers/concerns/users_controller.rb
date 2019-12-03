class UsersController < ApplicationController
 
    def index
      users = User.order("created_at DESC")
      render json: users
    end
  
    def show
      users = User.show(params[:id])
      render json: user
    end
  
    def create
      users = User.create(user_param)
      render json:user
    end
  
    def update
      users = User.find(params[:id])
      users.update_attributes(user_param)
      render json: user
    end
  
    def destroy
      users = User.find(params[:id])
      users.destroy
      head :no_content, status: :ok
    end
    
    private
      def user_param
        params.require(:user).permit(:email, :username, :password_digest)
      end
  end
  