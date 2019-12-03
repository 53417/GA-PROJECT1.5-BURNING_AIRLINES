class User < ApplicationRecord
    #acts_as_token_authenticatable
    has_secure_password

    validates_presence_of :email
    validates_uniqueness_of :email
end
