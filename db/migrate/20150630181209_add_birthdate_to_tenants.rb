class AddBirthdateToTenants < ActiveRecord::Migration
  def change
    add_column :tenants, :birthdate, :date
  end
end
