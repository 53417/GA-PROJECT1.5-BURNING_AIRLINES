class CreateSeatings < ActiveRecord::Migration[6.0]
  def change
    create_table :seatings do |t|
      t.integer :flight_id
      t.boolean :booked
      t.integer :user_id
      t.timestamps
    end
  end
end
