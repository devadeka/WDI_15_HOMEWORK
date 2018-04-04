require 'pry'

puts('welcome to the guessing game')

secret = rand(1..10000)
answer = 0

while answer != secret do
    puts('Guess the number')
    answer = gets.chomp.to_i
    if answer < secret
        puts('Guess too low')
    elsif answer > secret
        puts('Guess too high')
    else
        puts('Correct')
    end
end
