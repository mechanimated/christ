class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get "/products" do
    products = Product.all
    products.to_json
  end
  
  get "/ingredients" do
    products = Ingredient.all
    products.to_json
  end

  get "/saved_products" do
    products = SavedProduct.all
    products.to_json
  end

  get "/routines" do
    routine = Routine.all
    routine.to_json
  end

  post "/products" do
    product = Product.create(name: params[:name], brand: params[:brand], price: params[:price], chemicals: params[:chemicals])
    product.to_json
  end


  post "/saved_products" do
    product = SavedProduct.create(name: params[:name], brand: params[:brand], price: params[:price], chemicals: params[:chemicals])
    product.to_json
  end

  post "/routines" do
    routine = Routine.create(ingredients: params[:ingredient_id], products: params[:product_id])
    routine.to_json
  end

  patch "/products/:id" do
    product = Product.find(params[:id])
    product.update(name: params[:name], brand: params[:brand], price: params[:price], chemicals: params[:chemicals])
    product.to_json
  end

  patch "/saved_products/:id" do
    routine = SavedProduct.find(params[:id])
    routine.update(name: params[:name], brand: params[:brand], price: params[:price], chemicals: params[:chemicals])
    routine.to_json
  end

  delete "/saved_products/:id" do
    saved_product = SavedProduct.find(params[:id])
    saved_product.destroy
    saved_product.to_json
  end


end