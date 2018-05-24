class SweetsController < ApplicationController

    def index
        @sweets = Sweet.all
    end

    def create
        sweet = Sweet.new
        sweet.description = params[:description]
        sweet.user_id = session[:user_id]
        sweet.save
        redirect_to = "/"
    end

    def new
        render :new
    end

    def show
        @sweet = Sweet.find(params[:id])
    end

end
