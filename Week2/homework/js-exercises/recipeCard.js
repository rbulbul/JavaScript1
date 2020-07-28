'use strict';

let recipe = {};
recipe.title = 'Kabap';
recipe.servings = 2;
recipe.ingredients = ['1 kg meat', '2 bread', '2 eggs', 'spicy'];
console.log(recipe);
for (let property in recipe) {
  console.log(`${property}: ${recipe[property]}`);
}
