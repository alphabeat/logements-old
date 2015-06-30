class CreateTenants < ActiveRecord::Migration
  def change
    create_table :tenants do |t|
      t.string :firstname
      t.string :lastname
      t.integer :aage

      t.timestamps
    end
  end
end
