class ChangeType < ActiveRecord::Migration
  def change
      change_column :Bitcoinprices, :price, :decimal
  end
end
