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

// // 2. *Реалізувати клас RangeValidator.
// Клас призначений для валідації потрапляння числового значення в діапазон.
// Границі діапазона є властивостями:
// ■ from (типу number);
// ■ to (типу number);
// (from <= to)
// // Реалізувати getter'и та setter'и для обох властивостей.

class RangeValidator {
  constructor(from, to) {
    this._from = from;
    this._to = to;
    if (from > to) {
      throw new RangeError("`from` must be less than or equal to `to`");
    }
  }
  get from() {
    return this._from;
  }

  set from(value) {
    if (typeof value !== "number") {
      throw TypeError("`from` must be a number");
    }
    if (value > this._to) {
      throw RangeError("`from` value cannot be greater than `to` value");
    }
    this._from = value;
  }

  get to() {
    return this._to;
  }

  set to(value) {
    if (typeof value !== "number") {
      throw TypeError("`to` must be a number");
    }
    if (value < this.from) {
      throw RangeError("`to` value cannot be less than `from`");
    }
    this._to = value;
  }
  // // *Реалізувати getter range, який повертатиме масив із двома числами діапазону
  //    (тобто геттер повертає не властивість, а масив із двома елементами, які є властивостями)
  get range() {
    return [this._from, this._to];
  }
  // // Реалізувати метод isValid, який прийматиме число і перевірятиме,
  //    чи входить число у вказаний діапазон (повертає boolean).
  isValid(number) {
    if (typeof number !== "number") {
      throw TypeError("input value must be a number");
    }
    return number >= this._from && number <= this._to;
  }
}

// // Перевірки:
// Конструктор (+сеттери)

const range1 = new RangeValidator(1, 5.5);

try {
  new RangeValidator(10, 5.5);
} catch (err) {
  console.log(err);
}

// Робота сетерів

range1.from = 5;

try {
  range1.from = 200;
} catch (err) {
  console.log(err);
}

range1.to = 80;

try {
  range1.to = -55;
} catch (err) {
  console.log(err);
}

// Робота гетерів

console.log(range1.from);
console.log(range1.to);

// Робота геттера range

console.log(range1.range);

// Робота validate

console.log(range1.isValid(10));
console.log(range1.isValid(100));
