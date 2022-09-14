class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :chem_type
      t.string :treatment
    end
  end
end
