class CategorySerializer < ActiveModel::Serializer
    attributes :id, :category, :created_at, :updated_at, :created_date, :updated_date
    has_many :topics
    has_many :posts, through: :topics

    def created_date
        object.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated_date
        object.updated_at.localtime.strftime("%b %e,  %l:%M %p")
    end
end