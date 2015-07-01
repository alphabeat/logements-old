class CreateTenants < ActiveRecord::Migration
  def change
    create_table :tenants do |t|
      t.string :firstname
      t.string :lastname
      t.integer :age

      t.timestamps
    end
  end
end
