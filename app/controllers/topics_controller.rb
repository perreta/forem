class TopicsController < ApplicationController
    before_action :set_topic, only: [:show, :update, :destroy]
    skip_before_action :authorize

    # GET /topics
    def index
        @topics = Topic.all.sort_by(&:updated_at)
        render json: @topics
    end

    # GET /topics/1
    def show
        topic = set_topic
        render json: @topic, status: :ok
    end

    # POST /topics
    def create
        topic = @current_user.topics.create!(topic_params)
        render json: post, status: :created
    end

    # PATCH/PUT /topics/1
    def update
        if @topic.update(topic_params)
            render json: @topic
        else
            render json: @topic.errors, status: :unprocessable_entity
        end
    end

    # DELETE /topics/1
    def destroy
        @topic.destroy
    end

    private
        # Use callbacks to share common setup or constraints between actions.
        def set_topic
            @topic = Topic.find_by(id: params[:id])
        end

        # Only allow a list of trusted parameters through.
        def topic_params
            params.permit(:title, :user_id)
        end
end
