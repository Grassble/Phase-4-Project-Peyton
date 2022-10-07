class CreateFantasies < ActiveRecord::Migration[7.0]
  def change
    create_table :fantasies do |t|
      t.string :name
      t.string :image
      t.string :team
      t.string :position
      t.integer :team_id
      t.integer :position_id

      t.timestamps
    end
  end
end
