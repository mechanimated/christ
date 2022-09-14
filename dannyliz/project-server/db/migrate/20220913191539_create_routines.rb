class CreateRoutines < ActiveRecord::Migration[6.1]
  def change
    create_table :routines do |t|
      t.integer :ingredient_id
      t.integer :product_id
    end
  end
end
