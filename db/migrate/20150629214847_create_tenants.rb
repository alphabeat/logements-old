class CreateTenants < ActiveRecord::Migration
  def change
    create_table :tenants do |t|
      t.string :firstname
      t.string :lastname
      t.date :birthdate
      t.integer :phone
      t.string :parentsaddress
  	  t.integer :parentsphone
  	  t.string :email
      t.date :startdate
      t.date :enddate
  	  t.integer :cafamount
  	  t.integer :rent
      t.boolean :internet
  	  t.integer :solde
      t.string :payment
      t.boolean :haspaid

      t.timestamps
    end
  end
end
