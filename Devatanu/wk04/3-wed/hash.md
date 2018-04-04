# Array and Hash access

### A. Given the following data structure:

```ruby
a = ["Anil", "Erik", "Jonathan"]
a[0]
a.push("Devatanu")
```

1. How would you return the string `"Erik"`?
1. How would you add your name to the array?



### B. Given the following data structure:

```ruby
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
h[1]
h[:two]
h["two"]
h[3] = "Three"
h[:four] = 4
```

1. How would you return the string `"One"`?
1. How would you return the string `"Two"`?
1. How would you return the number `2`?
1. How would you add `{3 => "Three"}` to the hash?
1. How would you add `{:four => 4}` to the hash?

### C. Given the following data structure:

```ruby
is = {true => "It's true!", false => "It's false"}

"It's true!"
"It's false"
"It's false"
nil
nil
```

1. What is the return value of `is[2 + 2 == 4]`?
1. What is the return value of `is["Erik" == "Jonathan"]`?
1. What is the return value of `is[9 > 10]`?
1. What is the return value of `is[0]`?
1. What is the return value of `is["Erik"]`?

### D. Given the following data structure:

```ruby
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

users["Jonathan"][:twitter]
users["Jonathan"][:favorite_numbers].push(7)
users["Devatanu"] = {
    :twitter => "deva_deka",
    :favorite_numbers => [Float::INFINITY, 0, -Float::INFINITY],
  }
users["Erik"][:favorite_numbers]
users["Erik"][:favorite_numbers].min
users["Anil"][:favorite_numbers].select{|num| num%2==0}

favorite_numbers = []
users.each{|k,v| favorite_numbers.push(users[k][:favorite_numbers])}
favorite_numbers.inject(:&)

require 'set'
favorite_numbers = []
users.each{|k,v| favorite_numbers.push(users[k][:favorite_numbers])}
unique_favs = Set(favorite_numbers.flatten)
```

1. How would you access Jonathan's Twitter handle (i.e. the string `"tronathan"`)?
1. How would you add the number `7` to Erik's favorite numbers?
1. How would you add yourself to the users hash?
1. How would you return the array of Erik's favorite numbers?
1. How would you return the smallest of Erik's favorite numbers?
1. How would you return an array of Anil's favorite numbers that are also even?
1. How would you return an array of the favorite numbers common to all users?
1. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?