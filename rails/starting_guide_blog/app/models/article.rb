class Article < ApplicationRecord
  validates :title, presence:true, lenght: { minimum: 5 }
end
