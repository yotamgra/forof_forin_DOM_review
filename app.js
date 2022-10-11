let cartTotal = 0;
const foodMenuContainer = document.querySelector("#food-menu");
const dessertMenuContainer = document.querySelector("#dessert-menu");
const drinkMenuContainer = document.querySelector("#drink-menu");
const cartTotalDisplay = document.querySelector(".cart-total");
cartTotalDisplay.innerText = cartTotal;

//Use a for...of loop to iterate over the foodMenuItems array and create menu item cards for each of them.
function createFoodMenu() {
  for (const item of foodMenuItems) {
    const { name, image, description, price } = item;
    foodMenuContainer.innerHTML += `<div class="card">
        <div class="card-header">
            <h2>${name}</h2>
        </div>
        <div class="card-body">
            <div class="card-body-left">
                <img
                    src="${image}"
                    alt="${name}"
                />
            </div>
            <div class="card-body-right">
                <p>
                ${description}
                </p>
            </div>
            </div>
            <div class="card-footer">
                <p class="price">$10</p>
                <button value=${price}>Add to Cart</button>
            </div>
        </div>
    </div>`;
  }
}
// createFoodMenu();

function createDrinkMenu() {
  for (const drinkIndex in drinkMenuItems) {
    const { name, image, description, price } = drinkMenuItems[drinkIndex];
    drinkMenuContainer.innerHTML += `<div class="card">
        <div class="card-header">
            <h2>${name}</h2>
        </div>
        <div class="card-body">
            <div class="card-body-left">
                <img
                    src="${image}"
                    alt="${name}"
                />
            </div>
            <div class="card-body-right">
                <p>
                ${description}
                </p>
            </div>
            </div>
            <div class="card-footer">
                <p class="price">$10</p>
                <button value=${price}>Add to Cart</button>
            </div>
        </div>
    </div>`;
  }
}
// createDrinkMenu();

function createDessertMenu() {
  dessertMenuItems.map((item) => {
    const { name, image, description, price } = item;
    dessertMenuContainer.innerHTML += `<div class="card">
        <div class="card-header">
            <h2>${name}</h2>
        </div>
        <div class="card-body">
            <div class="card-body-left">
                <img
                    src="${image}"
                    alt="${name}"
                />
            </div>
            <div class="card-body-right">
                <p>
                ${description}
                </p>
            </div>
            </div>
            <div class="card-footer">
                <p class="price">$10</p>
                <button value=${price}>Add to Cart</button>
            </div>
        </div>
    </div>`;
  });
}
// createDessertMenu();

function createMenu(container, menuItems) {
  menuItems.forEach((item) => {
    const { name, price, description, image } = item;
    container.innerHTML += `<div class="card">
            <div class="card-header">
                <h2>${name}</h2>
            </div>
            <div class="card-body">
                <div class="card-body-left">
                    <img
                        src="${image}"
                        alt="${name}"
                    />
                </div>
                <div class="card-body-right">
                    <p>
                    ${description}
                    </p>
                </div>
                </div>
                <div class="card-footer">
                    <p class="price">$${price}</p>
                    <button class="add-to-cart" value=${price}>Add to Cart</button>
                </div>
            </div>
        </div>`;
  });
}
createMenu(foodMenuContainer, foodMenuItems);
createMenu(drinkMenuContainer, drinkMenuItems);
createMenu(dessertMenuContainer, dessertMenuItems);

const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cartTotal += +button.value;
    cartTotalDisplay.innerText = cartTotal;
  });
});

//Use the for...in loop to iterate over the drinkMenuItems array and create menu item cards for each of them.
//Question: Why is it less ideal to use a for...in loop (as opposed to a for...of loop) to iterate over an array?

//Use a .map() method to iterate over the dessertMenuItems array and create menu item cards for each of them.

//Refactor your code so it is DRY

//Add an event listener to all menu item buttons that adds the price of the menu item to the cartTotal variable and updates the cart total in the DOM.
