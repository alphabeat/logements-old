class Tenant < ActiveRecord::Base
	belongs_to :appartment # the tenant table has an appartment_id
end
