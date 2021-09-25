# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
puts "Seeding🌱..."

User.create(name: 'Bart Simpson', username: "bart", email: "aperret@me.com", bio: 'I love to post', profile_picture: "https://i.imgur.com/yqAVjVI.jpg", password: "1234567")
User.create(name: 'Lisa Simpson', username: "lisa", email: "aperret@me.com", bio: 'I also love to post', profile_picture: "https://i.imgur.com/hBBnyzA.jpg", password: "1234567")

Category.create(category: "Books")
Category.create(category: "Movies")
Category.create(category: "Music")
Category.create(category: "TV")
Category.create(category: "Food")
Category.create(category: "Fashion")

Topic.create(title: "What's everyone's favorite book? :)", user_id: 1, category_id: 1)
Topic.create(title: "What's the worst book you ever read?", user_id: 2, category_id: 1)

Topic.create(title: "Anyone seen any movies lately?", user_id: 1, category_id: 2)

Topic.create(title: "If you could be trapped on a desert island with one album, what would it be?", user_id: 1, category_id: 3)
Topic.create(title: "Concert thread (Post your pics!)", user_id: 2, category_id: 3)
Topic.create(title: "Your Song of the Day", user_id: 1, category_id: 3)

Topic.create(title: "What is everyone's favorite show and why is it 'The Sopranos'?", user_id: 2, category_id: 4)

Topic.create(title: "Killer Recipe Thread", user_id: 2, category_id: 5)

Topic.create(title: "NYFW 2021 Thread", user_id: 1, category_id: 6)





Post.create(content: "I just saw the film Balto. Great cinema!", user_id: 1, topic_id: 3)
Post.create(content: "Wow! I have not seen Balto but I will now add it to my list!", user_id: 2, topic_id:3)
Post.create(content: "I saw Jack and Jill, Sandman is such a tallent!!", user_id: 2, topic_id: 3)
Post.create(content: "Is that the one where he plays two characters?", user_id: 1, topic_id:3)
Post.create(content: "YESSS", user_id: 2, topic_id:3)

Post.create(content: "I love the dictionary, so informative! so much knowledge!", user_id: 1, topic_id: 1)
Post.create(content: "I find One Fish, Two Fish, Red Fish, Blue Fish very trite and pedantic", user_id: 2, topic_id:2)

Post.create(content: "The audiobook of 'How to Build a Boat for Dummies'", user_id: 1, topic_id:4)
Post.create(content: "Very funny, but this is the music category, please stay on topic", user_id: 2, topic_id:4)
Post.create(content: "If not that, then Rafi's iconic 'Baby Beluga'", user_id: 1, topic_id:4)

Post.create(content: "I hope to go to a concert some day :/", user_id: 2, topic_id:5)

Post.create(content: "Remember the Name by Fort Minor is the song of the day everyday", user_id: 2, topic_id:6)

Post.create(content: "Mine is The Sopranos because it's really good.", user_id: 1, topic_id:7)

Post.create(content: "My favorite recipe is delivery", user_id: 2, topic_id:8)
Post.create(content: "You are a joke of a person", user_id: 1, topic_id:8)

Post.create(content: "WOw the memories, grateful for all my NYFW family xx hugs!", user_id: 1, topic_id:9)



puts "Done Seeding"