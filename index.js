"use strict";
//Great Magicians: Start with a copy of your program from Exercise 40. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians = ['Harry Houdini', 'David Blane', 'Shin Lim'];
function make_great() {
    for (let magician of magicians) {
        magician = 'The Great ' + magician;
        console.log(magician);
    }
}
console.log("\n Great Magicians:\n");
make_great();
