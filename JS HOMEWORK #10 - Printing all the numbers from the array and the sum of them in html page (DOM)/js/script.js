let array = [1, 2, 3, 4, 5, 6, 9, 20, 61, 73, 46, 321];
document.getElementById(`main`).innerHTML = `<ul>`;
for (let i = 0; i < array.length; i++) {
    document.getElementById(`main`).innerHTML += `<li>${array[i]}</li>`;
}
document.getElementById(`main`).innerHTML += `</ul>`;

let result = 0;
for (let i = 0; i < array.length; i++) {
    result += array[i];

}
document.getElementById(`main`).innerHTML += `<p>`;
for (let i = 0; i < array.length; i++) {
    if (array.length - 1 === i) {
        document.getElementById(`main`).innerHTML += `${array[i]} = ${result}`;
    } else {
        document.getElementById(`main`).innerHTML += `${array[i]} + `;
    }
}
document.getElementById(`main`).innerHTML += `</p>`;