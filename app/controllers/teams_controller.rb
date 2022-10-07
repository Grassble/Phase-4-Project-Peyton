class TeamsController < ApplicationController

    def index
        render json: Team.all, status: :ok
    end
end
