class UsersController < ApplicationController

    def create
        user = User.new
        user.email = params[:email]
        user.password = params[:password]
        user.save
        redirect_to "/users/#{user.id}"
    end

    def new
    end

    def show
        @user = User.find(params[:id])
    end

end
