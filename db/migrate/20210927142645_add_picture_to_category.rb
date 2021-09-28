class AddPictureToCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :picture, :string
  end
end
