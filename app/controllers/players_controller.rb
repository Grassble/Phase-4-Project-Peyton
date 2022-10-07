class PlayersController < ApplicationController

    def index
        render json: Player.all, status: :ok
    end

    def show
        player = Player.find(params[:id])
        render json: player, status: :ok
    end

    def create
        player = Player.create!(player_params)
        render json: player, status: :created
    end

    def update
        player = Player.find(params[:id])
        player.update!(player_params)
        render json: player, status: :ok
    end

    def destroy
        player = Player.find(params[:id])
        player.destroy
        render json: {}, status: :ok
    end

    private

    def player_params
        params.permit(:name, :image, :team_id, :position_id)
    end

end
