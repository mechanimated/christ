class Product < ActiveRecord::Base
    has_many :routines 
    has_many :ingredients, through: :routines
end