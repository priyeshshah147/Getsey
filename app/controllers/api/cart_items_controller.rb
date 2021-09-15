class Api::CartItemsController < ApplicationController
    before_action only: [:index, :update, :destroy]

    def index
        debugger
        if logged_in?
            @cartitems = CartItem.all.select{|item| item.user_id == current_user.id}
            render 'api/cartitems/index'
        else
            return nil
        end
    end

    def update
        if logged_in?
            @cartitem = CartItem.find_by(id: params[:id])
            if @cartitem.update(cartitem_params)
                @cartitems = CartItem.all.select{|item| item.user_id == current_user.id}
                render :index
            end
        else
            render json: @cartitem.errors.full_messages, status: 404
        end
    end

    def destroy
        if logged_in?
            @cartitem = CartItem.find_by(id: params[:id])
            if @cartitem.destroy
                @cartitems = CartItem.all.select {|item| item.user_id == current_user.id}
                render :index
            end
        else
            render json: @cartitem.errors.full_messages, status: 404
        end
    end

    def create 
        allCartitems = CartItem.all.select{|item| item.user_id == current_user.id}
        @cartitem = CartItem.new(cartitem_params);
        hash = {};
        allCartitems.map{|cartitem| hash[cartitem.product_id] = cartitem.id}
        if hash.keys.include?(@cartitem.product_id)
            @existingcartitem = CartItem.find_by(id: hash[@cartitem.product_id])
            @existingcartitem.quantity = @existingcartitem.quantity + @cartitem.quantity
            if @existingcartitem.save && logged_in?
                @cartitems = CartItem.all.select{|item| item.user_id == current_user.id}
                render :index
            else
                render json: @cartitem.errors.full_messages, status: 404
            end
        else
            if @cartitem.save && logged_in?
                @cartitems = CartItem.all.select{|item| item.user_id == current_user.id}
                render :index
            else
                render json: @cartitem.errors.full_messages, status: 404
            end
        end
    end

    private

    def cartitem_params
        params.require(:cartitem).permit(:product_id, :user_id, :quantity)
    end


end