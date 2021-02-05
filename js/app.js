'use strict';
console.log('Hello');
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm',];

let allStores = [];

// let myContainer = document.getElementById('container');

// let tbody = document.getElementById('body-rows');
const cookieTable = document.querySelector('table');
let tbody = document.createElement('tbody');
cookieTable.appendChild(tbody);
console.log(cookieTable);

function Store (name, minHourCust, maxHourCust, avgSaleCust) {
  this.name = name;
  this.min = minHourCust;
  this.max = maxHourCust;
  this.avg = avgSaleCust;
  this.cookiesPerHour = [];
  this.dayTotal = 0;
  allStores.push(this);
  this.render();
}

// REF - Math.random
Store.prototype.randomCustHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesSoldHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCust = this.randomCustHour();
    let hourTotal = Math.ceil(randomCust * this.avg);
    this.cookiesPerHour.push(hourTotal);
    this.dayTotal = this.dayTotal + this.cookiesPerHour[i];
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldHour();
  let tr = document.createElement('tr'); // create tr

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let td = document.createElement('td'); // give content
    // give it content
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.dayTotal;
  tr.appendChild(td);
  tbody.appendChild(tr); // append row to dom
};

function renderHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);
  thead.appendChild(tr);
  cookieTable.appendChild(thead);
  // append to row for most people here
}

// function renderAll() {
//   renderHeader();
//   // use for loop? Yes!
//   for (var i = 0; i < allStores.length; i++) {
//     allStores[i].render();
//   }
//   // renderFooter();

// executatble code
// instatniations - Objects are created with constructor
new Store('Seattle', 23, 65, 6.3, []);
new Store('Tokyo', 3, 24, 1.2, []);
new Store('Dubai', 11, 38, 3.7, []);
new Store('Paris', 11, 38, 2.3, []);
new Store('Lima', 2, 16, 4.6, []);

// renderAll();

renderHeader();
// let theArray = allStores(0).cookiesPerHour;
// let theHour = allStores(0).cookiesPerHour

