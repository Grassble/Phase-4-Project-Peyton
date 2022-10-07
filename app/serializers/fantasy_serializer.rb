class FantasySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :team_id, :position_id, :team, :position
end
