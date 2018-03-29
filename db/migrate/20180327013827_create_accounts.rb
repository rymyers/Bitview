class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.integer :aob
      t.integer :ms

      t.timestamps null: false
    end
  end
end
