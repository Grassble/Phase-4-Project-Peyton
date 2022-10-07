class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :image
      t.integer :team_id
      t.integer :position_id

      t.timestamps
    end
  end
end
