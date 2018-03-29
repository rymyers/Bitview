class ChangeAgain < ActiveRecord::Migration
  def change
      change_column :Bitcoinprices, :price, :decimal, :precision => 10, :scale => 2
  end
end
