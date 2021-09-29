class Category < ApplicationRecord
    has_many :topics, dependent: :destroy
    has_many :posts, through: :topics
end
