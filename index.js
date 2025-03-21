const productsEl = document.querySelector('.products');
// Исходный массив с товарами
const products = ["Мышка", "Клавиатура", "Наушники"];
// Новые товары, которые нужно добавить ["Монитор", "Принтер", "Флешка"];
const newProducts = ['Монитор', 'Принтер', 'Флешка']

for (const element of newProducts) {
products.push(element);
}

for (let i = 0; i < products.length; i++) {
const liEl = document.createElement('li');
liEl.textContent = products[i];
productsEl.append(liEl);
}