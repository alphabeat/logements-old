class Appartment < ActiveRecord::Base
  belongs_to :building
  has_one :tenant # the tenant table has an appartment_id
end
