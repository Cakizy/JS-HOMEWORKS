let Rat = "Rat";
let Ox = "Ox";
let Tiger = "Tiger";
let Rabbit = "Rabbit";
let Dragon = "Dragon";
let Snake = "Snake";
let Horse = "Horse";
let Goat = "Goat";
let Monkey = "Monkey";
let Rooster = "Rooster";
let Dog = "Dog";
let Pig = "Pig";
let input = prompt(`which year you born? `);
let bornYear = parseInt(input);
let calculation = ((bornYear - 4) % 12)
if (Number.isNaN(bornYear)) {
    alert(`You should enter a number. `);
} else if (calculation == 0) {
    alert(`Your Chinese Zodiac a ${Rat}`);
} else if (calculation == 1) {
    alert(`Your Chinese Zodiac an ${Ox}`);
} else if (calculation == 2) {
    alert(`Your Chinese Zodiac a ${Tiger}`);
} else if (calculation == 3) {
    alert(`Your Chinese Zodiac a ${Rabbit}`);
} else if (calculation == 4) {
    alert(`Your Chinese Zodiac a ${Dragon}`);
} else if (calculation == 5) {
    alert(`Your Chinese Zodiac a ${Snake}`);
} else if (calculation == 6) {
    alert(`Your Chinese Zodiac a ${Horse}`);
} else if (calculation == 7) {
    alert(`Your Chinese Zodiac a ${Goat}`);
} else if (calculation == 8) {
    alert(`Your Chinese Zodiac a ${Monkey}`);
} else if (calculation == 9) {
    alert(`Your Chinese Zodiac a ${Rooster}`);
} else if (calculation == 10) {
    alert(`Your Chinese Zodiac a ${Dog}`);
} else if (calculation == 11) {
    alert(`Your Chinese Zodiac a ${Pig}`);
} else {
    alert(`DONT MESS WITH ME!`);
}