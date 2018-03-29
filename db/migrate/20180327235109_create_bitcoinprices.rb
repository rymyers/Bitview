class CreateBitcoinprices < ActiveRecord::Migration
  def change
    create_table :bitcoinprices do |t|
      t.integer :price

      t.timestamps null: false
    end
  end
end
