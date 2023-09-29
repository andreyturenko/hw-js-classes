// // // 1. Реалізувати клас Phone (таска з заняття).
// //    Властивості: марка, модель, колір, ціна, рік випуску, можна використати додаткові властивості за бажанням.
// //    Метод: розрахунок віку телефона.
// //    Створити екземпляр класу, викликати для нього метод.
// //    Реалізувати сеттер для року виробництва з валідацією та відповідний геттер.

class Phone {
  constructor(brand, model, color, price, year) {
    this.brand = brand;
    this.model = model;
    this.colour = color;
    this.price = price;
    this._year = year;
  }

  calcPhoneAge() {
    return new Date().getFullYear() - this._year;
  }

  set year(value) {
    if (typeof value !== "number") {
      throw new TypeError("year must be number value");
    }
    if (value < 0) {
      throw new RangeError("year must be positive number");
    }
    this._year = value;
  }

  get year() {
    return this._year;
  }
}
const iphone = new Phone("Apple", "Iphone", "grey", "1500$", 2020);
console.log("Age of the phone :>> ", iphone.calcPhoneAge());

iphone.year = 2021;
console.log("Year of manufacture :>> ", iphone.year);

// //    *Для перевірки, чи належить рік виробництва певному діапазону, можна використати клас нижче.
