class CreateSuppliers < ActiveRecord::Migration
  def change
    create_table :suppliers do |t|
      t.string :name
      t.string :company
      t.string :profession
      t.integer :phone
      t.string :address

      t.timestamps
    end
  end
end
