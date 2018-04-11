require 'sinatra'
require 'stock_quote'

$message = "Please enter a valid company id!"

get '/' do
    @message = $message
    erb(:home)
end

get '/fetch' do

    if params[:stock_code].downcase != ""
        stock = StockQuote::Stock.quote(params[:stock_code].downcase)

        if stock != nil
            $message = "As of #{stock.latest_time}, #{stock.company_name} has a stock value of #{stock.latest_price}"
        else
            $message = "No such company found. Please enter a valid company id!"
        end
    else
        $message = "Please enter a valid company id!"
    end
    
    redirect "/"
end