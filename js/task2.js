// Обьявляю переменные
const invoice = 100;
const stock = 100;

// Обьявляю инструкцию
const message =
  invoice < stock
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : invoice === stock
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно товаров!';

// const type = typeof stock;
console.log(message);
console.log(type);
