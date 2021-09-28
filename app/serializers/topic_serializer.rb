class TopicSerializer < ActiveModel::Serializer
    attributes :id, :title, :created_at, :updated_at, :created_date, :updated_date
    belongs_to :user
    belongs_to :category
    has_many :posts

    def created_date
        object.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated_date
        object.posts.last.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end
end
