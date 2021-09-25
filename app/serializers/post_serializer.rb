class PostSerializer < ActiveModel::Serializer
    attributes :id, :content, :created_at, :updated_at, :created_date, :updated_date
  
    belongs_to :user
    belongs_to :topic

    def created_date
        object.created_at.localtime.strftime("%b %e,  %l:%M %p")
    end

    def updated_date
        object.updated_at.localtime.strftime("%b %e,  %l:%M %p")
    end
end
