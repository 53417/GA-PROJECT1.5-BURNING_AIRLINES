class Seating < ApplicationRecord
    has_many :flights
    has_many :users
end
