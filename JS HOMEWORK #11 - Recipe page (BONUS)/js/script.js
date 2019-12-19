let recipe = prompt(`Please enter name of the recipe`);
let numberIngredients = prompt(`Please enter how many ingredients do we need for the recipe`);
let ingredientRecipe = parseInt(numberIngredients);

let ingredientArray = [];
if (Number.isNaN(ingredientRecipe)) {
    alert(`Invalid entery, please specify in numbers!`);
} else {
    for (let i = 0; i < ingredientRecipe; i++) {
        let ingredientName = prompt(`Please enter how many ingredients do we need for the recipe`);
        ingredientArray.push(ingredientName);
    }
}

document.getElementById(`main`).innerHTML = `
<h1 class="title"> ${recipe} </h1>`;
document.getElementById(`main`).innerHTML += `
<table class="tableStyle">
    <tr>
        <th class="tableHeader">
        ${recipe}
        </th>
    </tr>`;
for (let i = 0; i < ingredientArray.length; i++) {
    document.getElementById(`main`).firstElementChild.nextElementSibling.firstElementChild.innerHTML += `
    <tr class="itemsStyle">
        <td class="ingredientStyle">
            ${ingredientArray[i]}
        </td>
    </tr>`;
}
document.getElementById(`main`).innerHTML += `</table>`;