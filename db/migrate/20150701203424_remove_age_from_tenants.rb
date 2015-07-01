class RemoveAgeFromTenants < ActiveRecord::Migration
  def change
    remove_column :tenants, :age, :integer
  end
end
