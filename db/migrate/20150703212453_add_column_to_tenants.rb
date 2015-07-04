class AddColumnToTenants < ActiveRecord::Migration
  def change
    add_reference :tenants, :apparment, index: true
  end
end
