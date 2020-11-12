class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  enum age: {"10代": "0","20代": "1","30代": "2","40代": "3","50代": "4","60代以上": "5"}
  enum sex: {"男性": 0,"女性": 1,"その他": 2}
end
