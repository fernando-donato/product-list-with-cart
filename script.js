const buttons = document.querySelectorAll('.product-card button');
const cartItems = document.getElementById('cart-items');
const cartTitle = document.querySelector('.cart h2');
let cart = [];

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const productCard = btn.parentElement;
    const name = productCard.querySelector('h3').textContent;
    const price = parseFloat(
      productCard.querySelector('p').textContent.replace('$', ''),
    );

    cart.push({ name, price });

    renderCart();
  });
});

function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.querySelector('.cart p').textContent = `Total: $${total.toFixed(2)}`;
  cartTitle.textContent = `Your Cart (${cart.length})`;
}
