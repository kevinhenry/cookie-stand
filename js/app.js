'use strict';

console.log('Hello');

let allStores = [];

// this is for the section rendering // not relevant for table
// let myContainer = document.getElementById('container');
let myForm = document.querySelector('form');
console.log(myForm);

// let cookieTable = document.quarySelector('table');
const hour = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
// const allStores = [];

// let tbody = document.getElementById('body-rows');
const cookieTable = document.querySelector('table');
let tbody = document.createElement('tbody');
let footerTotals = [];
let grandTotal = 0;
cookieTable.appendChild(tbody);
console.log(cookieTable);

function Store (name, minHourCust, maxHourCust, avgSaleCust, imgSrc) {
  this.name = name;
  this.min = minHourCust;
  this.max = maxHourCust;
  this.avg = avgSaleCust;
  this.imgSrc = imgSrc;
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
  for (let i = 0; i < hour.length; i++) {
    // this.dayTotal += this.cookiesPerHour[i];
    let randomCust = this.randomCustHour();
    let hourTotal = Math.ceil(randomCust * this.avg);
    this.cookiesPerHour.push(hourTotal);
    this.dayTotal = this.dayTotal + this.cookiesPerHour[i];
  }
};

Store.prototype.render = function () {
  this.calcCookiesSoldHour();
  // create tr and append to DOM, all of its content is below
  let tr = document.createElement('tr'); // create tr
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  // create th, give content, append to DOM
  // let th = document.createElement('th');
  // th.textContent = this.name;
  // tr.appendChild(th);
  // create multiple tds, give content, append to DOM
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    // this.dayTotal += this.cookiesPerHour[i];
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  // create total td, give content, append to DOM
  let td = document.createElement('td');
  td.textContent = this.dayTotal;
  tr.appendChild(td);
  tbody.appendChild(tr);
};

// A. Have a place on DOM to append it to! getElement by ID or quarySelector
// 1. Create the element
// 2. Give it content
// 3. Append it to the DOM / it's Parent

function renderHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  // cookieTable.appendChild(tr);
  // th.textContent = '';
  tr.appendChild(th);

  for (let i = 0; i < hour.length; i++) {
    let th = document.createElement('th');
    th.textContent = hour[i];
    tr.appendChild(th);
  }

  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);
  thead.appendChild(tr);
  // console.log(cookieTable);
  cookieTable.appendChild(thead);
  // append to row for most people here
}

// FooterRow Sandbox
function renderFooter() {
  calcFooterTotals();
  let tfoot = document.createElement('tfoot');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Totals';
  tr.appendChild(td);

  for (let i = 0; i < hour.length; i++) {
    let td = document.createElement('td');
    td.textContent = footerTotals[i];
    tr.appendChild(td);
  }

  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);

  tfoot.appendChild(tr);
  cookieTable.appendChild(tfoot);
}

function calcFooterTotals(){
  footerTotals = [];
  grandTotal = 0;
  for (let i = 0; i < hour.length; i++){
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++){
      hourTotal += allStores[j].cookiesPerHour[i];
    }
    footerTotals.push(hourTotal);
    grandTotal += hourTotal;
  }
}

// executatble code
// instatniations - Objects are created with constructor
new Store('Seattle', 23, 65, 6.3, []);
new Store('Tokyo', 3, 24, 1.2, []);
new Store('Dubai', 11, 38, 3.7, []);
new Store('Paris', 11, 38, 2.3, []);
new Store('Lima', 2, 16, 4.6, []);

renderHeader();
// renderAll();
renderFooter();
