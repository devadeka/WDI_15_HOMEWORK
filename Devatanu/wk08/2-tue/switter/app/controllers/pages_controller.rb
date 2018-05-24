class PagesController < ApplicationController

    def index
        @sweets = Sweet.all
    end

end
