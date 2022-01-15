const allItems = document.querySelectorAll(".item");
const numberOfCategoriesRef = allItems.length;
console.log('Number of categories:', numberOfCategoriesRef);


const elemOfCategories = allItems.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent);
    console.log("Elements:", item.lastElementChild.children.length)
})