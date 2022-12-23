//* Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// !ЗАВДАННЯ 4

const counterValue = function ({
    initialValue = 0,
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;
    this._refs = this.getRefs(rootSelector);
};


CounterPlugin.prototype._getRefs = function (rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[increment]');
    refs.decrementBtn = refs.container.querySelector('[decrement]');
    
    // console.log(refs.incrementBtn);
    // console.log(refs.decrementBtn);
    return refs;
}

CounterPlugin.prototype.bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype._bindEvents -> this', this);
        this.increment();
    })
};

CounterPlugin.prototype.bindEvents = function () {
    this._refs.decrementBtn.addEventListener('click', () => {
        console.log('CounterPlugin.prototype._bindEvents -> this', this);
        this.decrement();
    })
};

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

const counter = new CounterPlugin({ rootSelector: '#counter', step: 1 });
console.log('counter', counter)

//? const counter = new CounterPlugin({ step: 1 });
// console.log(counter);
// counter.increment();
// console.log(counter);


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue