class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :api

  # Validation for role attribute
  validates :role, presence: true

  # Define enum for roles
  enum role: { client: 'client', administrator: 'administrator' }
end
