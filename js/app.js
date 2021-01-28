'use strict';

// Get the each store element by id.

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];

function randomCustomerPerHour () {
  // Gets the randomcustersper hour
}

let seattle = {
  name: 'Seattle',
  // The minimum number of customers per hour.
  minimumCustomerEachHour: 23,
  // The maximum number of customers per hour.
  maximumCustomerEachHour: 65,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 6.3,
  // Will hold the calculated number of cookies sold each hour
  cookiesSoldPerHourArray: [],
  // Will hold the calculated number of coookies sold in the store all day long
  dailyStoreTotal: 0,
  // A method to calculate random number of customers per hour
  // docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function(){
    // console.log('Im in randomCustomerEachHour');
    // Do something // return some math here
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
  // A method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function () {
    let randomCustomerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustomerForOneHour);
    console.log('I am inside of calcCoockiesSoldEachHour');
    // Do something maybe use a for loop
    // Multiply customer number by average
    // Handle the number. Do some rouding
    // Proof of life
    // Push into the cookiesSoldPerHourArray
  },
  // a method to render the list items.
  render: function (){
    this.calcCookiesSoldEachHour();
    console.log('I am in the render method');
    // Do something
  }
};
