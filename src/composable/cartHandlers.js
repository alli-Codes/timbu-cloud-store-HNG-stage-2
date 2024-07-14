const checkCartInLocalStorage = function () {
  let cart = localStorage.getItem("cart");
  if (!cart) {
    localStorage.setItem("cart", "[]");
    cart = localStorage.getItem("cart");
  }
  return JSON.parse(cart);
};

const addToCart = function (newItem) {
  const cart = checkCartInLocalStorage();
  cart.push(newItem);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFromCart = function (itemId) {
  const cart = checkCartInLocalStorage();
  cart.splice(itemId, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
};

export { checkCartInLocalStorage, addToCart, removeFromCart };
