class CreateSavedProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :saved_products do |t|
      t.string :name
      t.string :brand
      t.string :price
      t.string :chemicals
    end
  end
end
