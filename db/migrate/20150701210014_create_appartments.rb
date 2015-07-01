class CreateAppartments < ActiveRecord::Migration
  def change
    create_table :appartments do |t|
      t.references :building, index: true
      t.integer :number
      t.integer :area
      t.integer :rent

      t.timestamps
    end
  end
end
