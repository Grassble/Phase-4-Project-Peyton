class FantasiesController < ApplicationController

    def index
        render json: Fantasy.all, status: :ok
    end

    def create
        fantasy = Fantasy.create!(fantasy_params)
        render json: fantasy, status: :ok
    end

    def destroy
        fantasy = Fantasy.find(params[:id])
        fantasy.destroy
        render json: {}, status: :ok
    end

    private

    def fantasy_params
        params.permit(:name, :image, :team_id, :position_id, :team, :position)
    end
end
