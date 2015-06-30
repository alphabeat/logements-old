class CreateBuildings < ActiveRecord::Migration
  def change
    create_table :buildings do |t|
      t.integer :street_number
      t.string :street_type
      t.string :street_name
      t.string :zipcode
      t.string :city
      t.string :name
      t.integer :number_of_appartments

      t.timestamps
    end
  end
end
