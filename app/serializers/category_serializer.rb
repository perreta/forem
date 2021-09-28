class CategorySerializer < ActiveModel::Serializer
    attributes :id, :category, :picture, :created_at, :updated_at, :created_date, :updated_date
    has_many :topics
    has_many :posts, through: :topics

    def created_date
        object.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated_date
        object.posts.last.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end
end