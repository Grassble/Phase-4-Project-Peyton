class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image

  belongs_to :position
  belongs_to :team
end
