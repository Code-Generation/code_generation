class User < ActiveRecord::Base
  has_secure_password
  has_many :projects

  validates :username, :password_confirmation, presence: true

  validates :username, uniqueness: { case_sensitive: false },
                       length: { in: 5..20 }

  validates :password, confirmation: true, length: { minimum: 6 }


  before_save do
    self.username.downcase!
  end
end
