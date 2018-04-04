require 'pry'

calendar = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
puts calendar
puts

calendar.unshift(calendar.pop())
puts calendar
puts

new_calendar = [
    calendar[1..-2],
    [calendar[0],calendar.last]
]
puts new_calendar
puts

new_calendar.pop()
puts new_calendar
puts

puts new_calendar.pop().sort()
puts