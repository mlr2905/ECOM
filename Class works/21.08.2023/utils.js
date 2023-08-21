function get_random(max_random) {
    return Math.floor(Math.random() * max_random) + 1
}

function get_max(numbers) {
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[ i ] > max) {
            max = numbers[ i ]
        }
    } 
    return max
}

// take code from array_loops.html
// create a function get_max --> which gets an array as a parameter and returns the max value
// create a function get_min --> which gets an array as a parameter and returns the min value
// add the populate_list_random into this file utils.js

// create an HTML page, invite the utils.js (script src...) 
// create a random array of 20 items with random of numbers between 1-1000 [populate_list_random]
// call get_max and print its result
// call get_min and print its result