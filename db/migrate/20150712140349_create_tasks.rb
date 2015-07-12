class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.references :tenant, index: true
      t.string :label
      t.date :dueto
      t.boolean :state

      t.timestamps
    end
  end
end
