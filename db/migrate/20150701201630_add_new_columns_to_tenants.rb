class AddNewColumnsToTenants < ActiveRecord::Migration
  def change
  	add_column :tenants, :phone, :integer
  	add_column :tenants, :parentsphone, :integer
  	add_column :tenants, :email, :string
  	add_column :tenants, :startdate, :date
  	add_column :tenants, :enddate, :date
  	add_column :tenants, :cafamount, :integer
  	add_column :tenants, :rent, :integer
  	add_column :tenants, :internet, :boolean
  	add_column :tenants, :solde, :integer
  	add_column :tenants, :haspaid, :boolean
  end
end
