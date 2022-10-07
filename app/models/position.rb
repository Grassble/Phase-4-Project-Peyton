class Position < ApplicationRecord
    has_many :players 
    has_many :teams, through: :players
end
