class Fantasy < ApplicationRecord
    validates :name, uniqueness: true
    validates :position_id, uniqueness: true
end
