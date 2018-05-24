class SessionController < ApplicationController
    
    def destroy
        session[:current_user_id] = nil
    end

    def create
        #check email
        user = User.find_by(email: params[:email])
        # binding.pry
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to '/'
        else
            render :new
        end
    end

    def new
    end

end
