class CategoriesController < ApplicationController
    before_action :set_category, only: [:show, :update, :destroy]
    skip_before_action :authorize

    # GET /categories
    def index
        @categories = Category.all
        render json: @categories
    end

    # GET /categories/1
    def show
        category = set_category
        render json: category, status: :ok  
    end

    # POST /categories
    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    # PATCH/PUT /categories/1
    def update
        category = set_category
        category.update!(category_params)
        render json: category, status: :accepted
    end

    # DELETE /categories/1
    def destroy
        @category.destroy
    end

    private
        # Use callbacks to share common setup or constraints between actions.
        def set_category
            @category = Category.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def category_params
            params.permit(:category, :picture)
        end
end
