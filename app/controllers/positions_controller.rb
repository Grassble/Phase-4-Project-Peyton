class PositionsController < ApplicationController

    def index
        render json: Position.all, status: :ok
    end
end
