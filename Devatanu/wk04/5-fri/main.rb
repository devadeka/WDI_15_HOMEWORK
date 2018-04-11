require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

API_KEY = ""

url = "http://www.omdbapi.com/?apikey=#{API_KEY}&"

response =
  HTTParty.get("http://rubygems.org/api/v1/versions/httparty.json")

get "/" do 
return erb(:index) 
end


get "/result" do 
   return erb(:movie) 
end

get "/about" do 
   return erb(:about) 
end