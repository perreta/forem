class PostsController < ApplicationController
    before_action :set_post, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: :index

    # GET /posts
    def index
        @posts = Post.all.sort_by(&:created_at)
        render json: @posts
    end

    # GET /posts/1
    def show
        post = set_post
        render json: post, status: :ok  
    end

  

    # POST /posts
    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

  # PATCH/PUT /posts/1
    def update
        post = Post.find_by(id: params[:id])
        post.update!(post_params)
        render json: @post, status: :accepted
    end

  # DELETE /posts/1
    def destroy
        post = @current_user.posts.find(params[:id])
        post.destroy
        head :no_content
    end

    private
        # Use callbacks to share common setup or constraints between actions.    
        def set_post
            @post = Post.find_by(id: params[:id])
        end

        # Only allow a list of trusted parameters through.
        def post_params
            params.require(:post).permit(:content, :user_id, :topic_id)
        end
end
