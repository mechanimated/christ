class Routine < ActiveRecord::Base
    belongs_to :product
    belongs_to :ingredient
end