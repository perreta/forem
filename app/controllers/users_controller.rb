class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :create]

    # GET /users
    def index
        @users = User.all
        render json: @users
    end

    # GET /users/1
    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # POST /users (SIGNUP)
    def create
        # Remove :profile_picture if it's empty
        # parameters = user_params.to_h
        # if parameters[:profile_picture].blank? then 
        #     parameters.delete(:profile_picture)
        # end
        # if parameters[:bio].blank? then 
        #     parameters.delete(:bio)
        # end

        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created  
    end

    # PATCH/PUT /users/1
    def update
        @current_user.update!(user_params)
        render json: @current_user, status: :accepted
    end

  # DELETE /users/1
  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(id: params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :username, :email, :profile_picture, :bio, :password)
    end
end
