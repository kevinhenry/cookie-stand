'use strict';

// global variables
// hours array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// TODO: need to elements by id for the 5 lists
let seattleList = document.getElementById('seattle');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementByID('lima');


// Write 5 object literals - will finish one first, then do the others based on that
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  aveCust: 6.3,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  // get random number of customers for an hour
  // docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  getRandomCust: function () {
    //  console.log('I am in the getRandomCust method');
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },

  // calculate the number of cookies for each hour
  // iteratively get random cust for each hour * aveSale
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.getRandomCust();
      // console.log(randomCust);
      let hourlyTotal = Math.ceil(randomCust * this.aveSale);
      // console.log(hourlyTotal);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    // console.log(this.cookiesPerHourArray);
    // colsole.log('I am in the calcCookiesPerHour method');
  },

  // render results. at this point we have 14 hours worth of cookie sales
  render: function () {
    this.calcCookiesPerHour();
    // console.log('I am in the render method');

    for (let i = 0; i < hours.length; i++) {
      // TODO: need torender the following string as a list item
      // '6am: 16 cookies'
      // create element
      let li = document.createElement('li');
      // give it content
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      // append it to the DOM
      seattleList.appendChild(li);
    }

    // total:
    let li = document.createElement('li');
    // give it content
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    // append it to the DOM
    seattleList.appendChild(li);
  }
};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  aveCust: 1.2,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  getRandomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.getRandomCust();
      let hourlyTotal = Math.ceil(randomCust * this.aveSale);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      tokyoList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    tokyoList.appendChild(li);
  }
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 24,
  aveCust: 3.7,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  getRandomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.getRandomCust();
      let hourlyTotal = Math.ceil(randomCust * this.aveSale);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      dubaiList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    dubaiList.appendChild(li);
  }
};

let paris = {
  name: 'Paris',
  minCust: 3,
  maxCust: 24,
  aveCust: 1.2,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  getRandomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.getRandomCust();
      let hourlyTotal = Math.ceil(randomCust * this.aveSale);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      parisList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    parisList.appendChild(li);
  }
};

let lima = {
  name: 'Lima',
  minCust: 3,
  maxCust: 24,
  aveCust: 1.2,
  cookiesPerHourArray: [],
  dailyTotal: 0,

  getRandomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let randomCust = this.getRandomCust();
      let hourlyTotal = Math.ceil(randomCust * this.aveSale);
      this.cookiesPerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function () {
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesPerHourArray[i]} cookies`;
      limaList.appendChild(li);
    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyTotal} cookies`;
    limaList.appendChild(li);
  }
};


// Executable Code
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// After seattle is done, minimize, copy, paste, and replace with Tokyo
