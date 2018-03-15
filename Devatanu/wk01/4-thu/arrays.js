var days_of_the_week =[
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
];

days_of_the_week.pop();
days_of_the_week.reverse();
days_of_the_week.push('sunday');
days_of_the_week.reverse();

var days_of_the_week = [
    [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday'
    ],
    [
        'saturday',
        'sunday'
    ]
];

days_of_the_week.pop();

days_of_the_week[0].sort();
console.log(days_of_the_week);