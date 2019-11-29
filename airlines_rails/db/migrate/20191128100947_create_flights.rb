class CreateFlights < ActiveRecord::Migration[6.0]
  def change
    create_table :flights do |t|
      t.integer :plane_id
      t.string :fly_from
      t.string :fly_to
      t.datetime :fly_time
      t.timestamps
    end
  end
end
