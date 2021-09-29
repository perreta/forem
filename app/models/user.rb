class User < ApplicationRecord
    has_many :topics, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :categories, through: :topics

    has_secure_password

    validates :name, presence: true
    validates :username, presence: true, uniqueness:  :true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, presence: true, length: { in: 6..20 }
    validates :bio, length: {maximum: 140 }
end
