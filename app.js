let cartTotal = 0;
const foodMenuContainer = document.querySelector("#food-menu");
const dessertMenuContainer = document.querySelector("#dessert-menu");
const drinkMenuContainer = document.querySelector("#drink-menu");
const cartTotalDisplay = document.querySelector(".cart-total");
cartTotalDisplay.innerText = cartTotal;

//Use a for...of loop to iterate over the foodMenuItems array and create menu item cards for each of them.

//Use the for...in loop to iterate over the drinkMenuItems array and create menu item cards for each of them.
//Question: Why is it less ideal to use a for...in loop (as opposed to a for...of loop) to iterate over an array?

//Use a .map() method to iterate over the dessertMenuItems array and create menu item cards for each of them.

//Refactor your code so it is DRY

//Add an event listener to all menu item buttons that adds the price of the menu item to the cartTotal variable and updates the cart total in the DOM.
