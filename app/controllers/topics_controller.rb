class TopicsController < ApplicationController
    before_action :set_topic, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index, :show]

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
        render json: topic, status: :created
    end

    # PATCH/PUT /topics/1
    def update
        topic = set_topic
        topic.update!(topic_params)
        render json: topic, status: :accepted
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
            params.require(:topic).permit(:title, :user_id, :category_id)
        end
end
