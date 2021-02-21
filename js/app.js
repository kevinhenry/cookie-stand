'use strict';

// console.log('Hello');

// Global Variables
let myForm = document.getElementById('form');
let tableHeader = document.getElementById('table-header');
let tableBody = document.getElementById('table-body');
let allStores = [];
let hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let tableFooter = document.getElementById('table-footer');

function Store (name, minHourCust, maxHourCust, avgSaleCust) {
  this.name = name;
  this.min = minHourCust;
  this.max = maxHourCust;
  this.avg = avgSaleCust;
  this.cookiesPerHour = [];
  this.dayTotal = 0;
  allStores.push(this);
}

// REF - Math.random
Store.prototype.randomCustHour = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcCookiesSoldHour = function () {
  for (let i = 0; i < hour.length; i++) {
    // this.dayTotal += this.cookiesPerHour[i];
    let randomCust = this.randomCustHour();
    let hourTotal = Math.floor(randomCust * this.avg);
    this.cookiesPerHour.push(hourTotal);
    this.dayTotal += hourTotal;
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldHour();
  let tr = document.createElement('tr');
  tableBody.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = this.dayTotal;
  tr.appendChild(td);
};

function renderHeader() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < hour.length; i++) {
    let td = document.createElement('td');
    td.textContent = hour[i];
    tr.appendChild(td);
  }

  let td = document.createElement('td');
  td.textContent = 'Daily Location Total';
  tr.appendChild(td);
  tableHeader.appendChild(tr);
}

function renderFooter() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  tableFooter.appendChild(tr);
  th.textContent = 'Totals';
  tr.appendChild(th);
  let grandTotal = 0;
  for (let i = 0; i < hour.length; i++) {
    let footerTotals = 0;
    for (let j = 0; j < allStores.length; j++) {
      footerTotals += allStores[j].cookiesPerHour[i];
    }

    let td = document.createElement('td');
    td.textContent = footerTotals;
    tr.appendChild(td);
    grandTotal += footerTotals;
  }

  let td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
}

function handleSubmit(event) {
  event.preventDefault();
  let newLocation = event.target.newlocation.value;
  let newMinCust = +event.target.minhourcust.value;
  let newMaxCust = +event.target.maxhourcust.value;
  let newAvgCust= +event.target.avgsalecust.value;
  let newStore = new Store(newLocation, newMinCust, newMaxCust, newAvgCust);
  newStore.render();
  tableFooter.removeChild(tableFooter.lastChild);
  renderFooter();
}

// executatble code
// instatniations - Objects are created with constructor
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 11, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

function renderAll() {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

renderAll();
renderHeader();
renderFooter();

myForm.addEventListener('submit', handleSubmit);
