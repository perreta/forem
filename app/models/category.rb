class Category < ApplicationRecord
    has_many :topics
    has_many :posts, through: :topics

end
