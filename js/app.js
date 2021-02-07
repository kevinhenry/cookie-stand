

Store.prototype.render = function () {
  // create tr and append to DOM, all of its content is below
  let tr = document.createElement('tr'); // create tr
  // let th = document.createElement('th');
  // th.textContent = this.name;
  cookieTable.appendChild(tr);

  // create th, give content, append to DOM
  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);
  // create multiple tds, give content, append to DOM
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    this.dayTotal += this.cookiesPerHour[i];
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  // create total td, give content, append to DOM
  let td = document.createElement('td');
  td.textContent = this.dayTotal;
  tr.appendChild(td);
};

Store.prototype.renderSection = function () {
  // create section and append to DOM, all of its content is below
  let section = document.createElement('section');
  myContainer.appendChild(section);

  // create image, "give content", append to DOM
  let img = document.createElement('img');
  img.src = this.imgSrc;
  img.alt = 'closeup picture of xxxx';
  img.title = 'xxxx';
  section.appendChild(img);

  // create article and append to DOM, all of its content is below
  let article = document.createElement('article');
  section.appendChild(article);

  // create h3, give it content, append to DOM
  let h3 = document.createElement('h3');
  h3.textContent = this.name;
  article.appendChild(h3);

  // create p, give it content, append to DOM
  let p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet';
  article.appendChild(p);
};

function renderAll() {
  for (let i = 0; i < allStores.length; i++) {
    allStores[i].render();
    allStores[i].renderSection();
  }
}

// A. Have a place on DOM to append it to! getElement by ID or quarySelector
// 1. Create the element
// 2. Give it content
// 3. Append it to the DOM / it's Parent

function renderHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  // cookieTable.appendChild(tr);
  th.textContent = '';
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
  // for (let j = 0; j < hours.length; j++) {
  //  hourTotal = hourTotal + allStores[j].cookiesPerHour[i];
  //   cookiesPerHour += allStores[j].cookiesPerHour[i];
  // }
  // let td = document.createElement('td');
  // td.textContent = hourTotal[i];
  // tr.appendChild(td);
  // }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);

  tfoot.appendChild(tr);
  cookieTable.appendChild(tfoot);
}

function calcFooterTotals(){
  footerTotals = [];
  grandTotal = 0
  for (let i = 0; i < hour.length; i++){
    let hourTotal = 0;
    for (let j = 0; j < allStores.length; j++){
      hourTotal += allStores[j].cookiesPerHour[i];
    }
    footerTotals.push(hourTotal);
    grandTotal += hourTotal;
  }
}

// function handleSubmit(event){
//   event.preventDefault();

//   let hiveName = event.target.hivename.value;
//   let yieldOne = +event.target.yieldOne.value;
//   let yieldTwo = +event.target.yieldTwo.value;
//   let yieldThree = +event.target.yieldThree.value;
//   let honeyYield = [yieldOne, yieldTwo, yieldThree];
//   let imgSrc = event.target.imgSrc.value;

//   let newHive = new BeeHive(hiveName, honeyYield, imgSrc);
//   newHive.render();
//   newHive.renderSection();

// clear out footer row.
// rerender footer row with correct totatls

// executatble code
// instatniations - Objects are created with constructor
new Store('Seattle', 23, 65, 6.3, []);
new Store('Tokyo', 3, 24, 1.2, []);
new Store('Dubai', 11, 38, 3.7, []);
new Store('Paris', 11, 38, 2.3, []);
new Store('Lima', 2, 16, 4.6, []);

renderHeader();
renderAll();
renderFooter();


myForm.AddEventListener('submit', handleSubmit);

