class AddColumnToTenants < ActiveRecord::Migration
  def change
        add_reference :tenants, :appartment, index: true
  end
end
