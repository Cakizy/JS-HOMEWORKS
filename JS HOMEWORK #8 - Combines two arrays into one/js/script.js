let firstNames = [`Nate`, `Simona`, `Hristijan`, `Pero`];
let lastNames = [`Paneva`, `Denkova`, `Petrovski`, `Gjorgjioski`];
let fullName = [];
let counter = 1;

function fullNameFunction(fullName) {
    for (let i = 0; i < firstNames.length; i++) {
        fullName.push(`${counter}. ${firstNames[i]} ${lastNames[i]}`);
        counter++
    }
    console.log(fullName);
}
fullNameFunction(fullName);