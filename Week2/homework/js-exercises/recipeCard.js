'use strict';

let recipe = {};
recipe.title = 'Kabap';
recipe['servings'] = 2;
recipe.ingredients = ['1 kg meat', '2 bread', '2 eggs', 'spicy'];
console.log(recipe);
for (let tarif in recipe) {
  console.log(`${tarif}: ${recipe[tarif]}`);
}
