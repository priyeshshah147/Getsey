class Api::ReviewsController < ApplicationController
    before_action :require_login, only: [:create, :destroy, :update]
    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.error.full_messages, status: 404
        end
    end

  

    def index 
        
        @reviews = Review.includes(:reviewer).find_by_product_id(params[:product_id])
        render :index
    end


    # def show
    #     @review = Review.find_by(id: params[:id])
    #     if @review
    #         render :show
    #     else
    #         render json: @reviews.errors.full_messages, status:404
    #     end
    # end

    def update
        @review = current_user.reviews.find_by(id: params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status:422
        end

    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review
            @review.destroy
            render :show
        else
            render json: @review.errors.full_messages, status:422
        end
    end

    private

        def review_params
            params.require(:review).permit(:rating, :comment, :product_id)
        end

end