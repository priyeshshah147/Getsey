class Api::ProductsController < ApplicationController
    def index
        
        @products = Product.includes(photo_attachment: :blob).all
        render `api/products/index`
    end

    def show
        
        @product = Product.find(params[:id])
        render :show
       
        
    end

    def create
        @product = Product.create(product_params)
        if @product.save 
            render `api/products/index`
        else
            render json: @product.errors.full_messages, status: 422
        end
    end



    private
    def product_params 
        params.require(:product).permit( :produce_name, :description, :price)
    end
end