class Routine < ActiveRecord::Base
    belongs_to :product
    belongs_to :ingredient
    belongs_to :saved_product
end