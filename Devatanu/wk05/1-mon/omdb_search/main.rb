require 'sinatra/reloader'     
require 'sinatra'
require 'httparty'
require 'json'
require 'pry'

API_KEY = "2f6435d9"
url = "http://www.omdbapi.com/?apikey=#{API_KEY}"


get '/' do
  erb :index
end

def write_responses(response_hash)
  File.open('response.csv') do file
    file.truncate(0)
    response.each do |movie|
      file.puts "#{movie['Title']}"
    end
  end
end

get '/movie_list' do
  searchString = url+"&s="+ params[:searchString]
  puts searchString
  @movie_response = HTTParty.get(searchString).parsed_response["Search"]
  p @movie_response

  if @movie_response.nil?
    @movie_response = []
  end

  File.open("response.json","w") do |f|
    f.truncate(0)
    f.write(JSON.pretty_generate(@movie_response))
  end
  
  erb :movie_list 
end

get '/movie_details' do
  searchString = url+"&i="+params[:imdbId]
  puts searchString
  File.open("response.json","r") do |f|
    @movie_response = JSON.parse(f.read)
    
  end
  @movie_details = HTTParty.get(searchString).parsed_response

  # binding.pry

  erb :movie_details 
end