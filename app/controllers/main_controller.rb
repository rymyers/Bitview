class MainController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:new]
  def index
  end

  def new
    coin = Bitcoinprice.new(price_params)
      if coin.save
          redirect_to "/home"
      else
          flash[:errors] = price.errors.full_messages
          redirect_to :back
      end
  end

  def home
    @currentprice = Bitcoinprice.last.price;
    @user = Account.first;
  end

  private

  def price_params
        params.require(:price).permit(:price)
    end
end
