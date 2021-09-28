class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :username, :email, :profile_picture, :bio, :admin, :password_digest, :categories

    has_many :posts
    has_many :topics
    has_many :categories, through: :topics
end
