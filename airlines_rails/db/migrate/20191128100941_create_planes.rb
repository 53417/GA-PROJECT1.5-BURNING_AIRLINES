class CreatePlanes < ActiveRecord::Migration[6.0]
  def change
    create_table :planes do |t|
      t.string :plane_name
      t.integer :rows
      t.integer :cols
      t.integer :total_seat
      t.timestamps
    end
  end
end
