const credits = 23580;
const pricePerDroid = 3000;
let message = prompt("Яку кількість дроїдів, ви хочете купити?");
let totalPrice = message * pricePerDroid;
let balance = credits - totalPrice;

if (credits>totalPrice, message > null) {
    alert(`Ви купили ${message} дроїдів, на рахунку залишилося ${balance} кредитів.`);
} else if (message === null){
    alert('Cкасовано користувачем');
} else {
    alert ('Недостатньо коштів на рахунку!');
}
