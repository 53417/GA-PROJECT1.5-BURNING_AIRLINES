class DropUsers < ActiveRecord::Migration[6.0]
  def change
    drop_table :users do |t|
      t.string "email"
      t.string "username"
      t.string "password_digest"
      t.boolean "is_admin"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end 
  end
end
