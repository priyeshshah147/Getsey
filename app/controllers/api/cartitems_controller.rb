class Api::CartitemsController < ApplicationController
    before_action only: [:index, :update, :destroy]

    def index
        if logged_in?
            @cartitems = CartItem.all.select{|item| item.user_id == current_user.id}
            render 'api/cartitems/index'
        else
            return nil
        end
    end

    def create 
        @cartitem = CartItem.new(cartitem_params)
        if @cartitem.save && logged_in?
            redirect_to action: 'index'
        else
            render json: @cartitem.errors.full_messages, status: 404
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
                @cartitems = Cartitem.all.select {|item| item.user_id == current_user.id}
                render :index
            end
        else
            render json: @cartitem.errors.full_messages, status: 404
        end
    end

    private

    def cartitem_params
        params.require(:cartitem).permit(:product_id, :user_id, :quantity)
    end

end