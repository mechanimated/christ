class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    get '/ingredients' do
      ingredients = Ingredient.all
      ingredients.to_json
    end

    get '/ingredients/:id' do
      ingredients = Ingredient.find(params[:id])
      ingredients.to_json(include: :ingredients)
    end 

    get '/products' do 
      products = Product.all
      products.to_json
    end

    get '/products/:id' do
      products = Product.find(params[:id])
      products.to_json(include: :ingredients)
    end

    get '/routines' do
      routines = Routine.all
      routines.to_json
    end

    #routines has no id, brainfart 

    # get '/routines/:id' do
    #   routines = Routine.find(params[:id])
    #   routines.to_json(include: :routines)
    # end
  end