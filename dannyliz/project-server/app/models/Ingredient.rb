class Ingredient < ActiveRecord::Base
    has_many :routines
    has_many :products, through: :routines
end