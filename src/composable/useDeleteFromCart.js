export default function deleteFromCart(id) {
  const items = JSON.parse(localStorage.getItem("cartItems"));
  items.shift();
}
