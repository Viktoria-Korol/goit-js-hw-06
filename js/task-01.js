// ! 1 ЗАВДАННЯ

//Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
//і кількість елементів в категорії(усіх < li >, вкладених в нього).

const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Category: ${categories.children[0].textContent} 
Elements: ${categories.children[1].children.length}
`
  )
  .join("\n");
console.log(categoriesArray);

