class Api::ReviewsController < ApplicationController
    before_action :require_logged_in!, only: [:create, :destroy, :update]
    def create
        # debugger
        @user = current_user
        @review = Review.new(product_id:params[:review][:product_id], 
        comment:params[:review][:comment], 
        rating: params[:review][:rating],
        reviewer_id: current_user.id
        )

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 404
        end
    end

  

    def index 
        
        @reviews = Review.includes(:reviewer).find_by_product_id(params[:product_id])
        debugger
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