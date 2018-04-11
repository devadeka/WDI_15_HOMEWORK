require 'sinatra/reloader'     
require 'sinatra'
require 'httparty'

API_KEY = "2f6435d9"
url = "http://www.omdbapi.com/?apikey=#{API_KEY}"



get '/' do
  erb :index
end

get '/movie_list' do
  searchString = url+"&s="+params[:searchString]
  puts searchString
    @movie_response = HTTParty.get(searchString).parsed_response["Search"]
  if @movie_response.nil?
    @movie_response = {}
  end
  erb :movie_list 
end

get '/movie_details' do
  searchString = url+"&i="+params[:imdbId]
  puts searchString
  @movie_response = HTTParty.get(searchString).parsed_response
  erb :movie_details 
end