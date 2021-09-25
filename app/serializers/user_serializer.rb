class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :username, :email, :profile_picture, :bio, :password_digest

    has_many :posts
    has_many :topics
end
