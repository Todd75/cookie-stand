'use strict';

let hoursDaily = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let everyStore = [];


function StoreData(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.cookiesPerHourSalesArray = [];
  this.createTable();
  everyStore.push(this);
}


function averageCookies(min,max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

let createHeader = function () {
  let section = document.getElementById('hours');
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = 'Location';
  row.appendChild(head);
  section.appendChild(row);
  for (let i = 0; i < hoursDaily.length; i++) {
    let newCell = document.createElement('th');
    newCell.textContent = hoursDaily[i];
    row.appendChild(newCell);
  }
  let headerTotals = document.createElement('th');
  headerTotals.textContent = 'Totals';
  row.appendChild(headerTotals);
}
createHeader();


StoreData.prototype.hourlySalesValues = function() {
  for(let i = 0; i < hoursDaily.length; i++) {
    let randomNumber = averageCookies(this.min, this.max);
    let cookiesHourly = Math.round(randomNumber * this.avg);
    this.cookiesPerHourSalesArray.push(cookiesHourly);
    this.dailyTotal += cookiesHourly;
  }
};

StoreData.prototype.createTable = function() {
  this.hourlySalesValues();
  let section = document.getElementById('storesData')
  let headT = document.createElement('th');
  let row = document.createElement('tr');
  headT.textContent = this.name;
  row.appendChild(headT);
  section.appendChild(row);
  for (let i = 0; i < hoursDaily.length; i++) {
    let newCell = document.createElement('td');
    row.appendChild(newCell);
    newCell.textContent = `${this.cookiesPerHourSalesArray[i]}`;
  }
  let cellTotals = document.createElement('td');
  row.appendChild(cellTotals);
  cellTotals.textContent = `${this.dailyTotal}`;
}

new StoreData('Seattle', 23, 65, 6.3);
new StoreData('Tokyo', 3, 24, 1.2);
new StoreData('Dubai', 11, 38, 3.7);
new StoreData('Paris', 20, 38, 2.3);
new StoreData('Lima', 2, 16, 4.6);

const locationForm = document.getElementById('addStoreData');

locationForm.addEventListener('submit', 
  function(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const min = event.target.min.value;
    const max = event.target.max.value;
    const avg = event.target.avg.value;
    const newLocation = new StoreData(name, min, max, avg);
    document.getElementById('finalTotal').textContent = '';
    createFooter();
    locationForm.reset();
  }
);


let createFooter = function() {
  let section = document.getElementById(`finalTotal`);
  let head = document.createElement('th');
  let row = document.createElement('tr');
  head.textContent = 'Total';
  row.appendChild(head);
  section.appendChild(row);
  let finalTotal = 0;
  for (let i = 0; i < hoursDaily.length; i++) {
    let salesHour = 0;
    let cell = document.createElement('td');
    for( let j = 0; j < everyStore.length; j++) {
      let actualStore = everyStore[j];
      let actualSales = actualStore.cookiesPerHourSalesArray[i];
      salesHour += actualSales;
    }
    finalTotal = salesHour + finalTotal;
    cell.textContent = salesHour;
    row.append(cell);
  }
  let finalCell = document.createElement('td');
  finalCell.textContent = finalTotal;
  row.appendChild(finalCell);
};
createFooter();



/*  Originally Question 6 
// Seattle


let seattle = {
  list: document.getElementById('seattleList'),
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateCityArray : function() {
    for (let i=0; i < hoursDaily.length; i++) {
      let cookiesCurrentHour = Math.round(this.getRandomCust() * this.avg);
      this.dailyTotal = this.dailyTotal + cookiesCurrentHour;
      console.log(cookiesCurrentHour);
      this.cookiesSoldByHourArray.push(cookiesCurrentHour);
    }
  },
  renderCity : function() {
    let h2 = document.createElement('h2');
    h2.textContent = 'Seattle';
    this.list.appendChild(h2);
    for (let i=0; i < hoursDaily.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursDaily[i]}: ${this.cookiesSoldByHourArray[i]} cookies`;
      this.list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Daily Total: ${this.dailyTotal} cookies`;
    this.list.appendChild(totalLi);
  }
};

seattle.populateCityArray();
seattle.renderCity();
  
  
// Toyko


let tokyo = {
  list: document.getElementById('tokyoList'),
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateCityArray : function() {
    for (let i=0; i < hoursDaily.length; i++) {
      let cookiesCurrentHour = Math.round(this.getRandomCust() * this.avg);
      this.dailyTotal = this.dailyTotal + cookiesCurrentHour;
      console.log(cookiesCurrentHour);
      this.cookiesSoldByHourArray.push(cookiesCurrentHour);
    }
  },
  renderCity : function() {
    let h2Tokyo = document.createElement('h2');
    h2Tokyo.textContent = 'Tokyo';
    this.list.appendChild(h2Tokyo);
    for (let i=0; i < hoursDaily.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursDaily[i]}: ${this.cookiesSoldByHourArray[i]} cookies`;
      this.list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Daily Total: ${this.dailyTotal} cookies`;
    this.list.appendChild(totalLi);
  }
};

tokyo.populateCityArray();
tokyo.renderCity();

// Dubai

let dubai = {
  list: document.getElementById('dubaiList'),
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateCityArray : function() {
    for (let i=0; i < hoursDaily.length; i++) {
      let cookiesCurrentHour = Math.round(this.getRandomCust() * this.avg);
      this.dailyTotal = this.dailyTotal + cookiesCurrentHour;
      console.log(cookiesCurrentHour);
      this.cookiesSoldByHourArray.push(cookiesCurrentHour);
    }
  },
  renderCity : function() {
    let h2 = document.createElement('h2');
    h2.textContent = 'Dubai';
    this.list.appendChild(h2);
    for (let i=0; i < hoursDaily.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursDaily[i]}: ${this.cookiesSoldByHourArray[i]} cookies`;
      this.list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Daily Total: ${this.dailyTotal} cookies`;
    this.list.appendChild(totalLi);
  }
};

dubai.populateCityArray();
dubai.renderCity();

// Paris

let paris = {
  list: document.getElementById('parisList'),
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateCityArray : function() {
    for (let i=0; i < hoursDaily.length; i++) {
      let cookiesCurrentHour = Math.round(this.getRandomCust() * this.avg);
      this.dailyTotal = this.dailyTotal + cookiesCurrentHour;
      console.log(cookiesCurrentHour);
      this.cookiesSoldByHourArray.push(cookiesCurrentHour);
    }
  },
  renderCity : function() {
    let h2 = document.createElement('h2');
    h2.textContent = 'Paris';
    this.list.appendChild(h2);
    for (let i=0; i < hoursDaily.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursDaily[i]}: ${this.cookiesSoldByHourArray[i]} cookies`;
      this.list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Daily Total: ${this.dailyTotal} cookies`;
    this.list.appendChild(totalLi);
  }
};

paris.populateCityArray();
paris.renderCity();

// Lima

let lima = {
  list: document.getElementById('limaList'),
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  populateCityArray : function() {
    for (let i=0; i < hoursDaily.length; i++) {
      let cookiesCurrentHour = Math.round(this.getRandomCust() * this.avg);
      this.dailyTotal = this.dailyTotal + cookiesCurrentHour;
      console.log(cookiesCurrentHour);
      this.cookiesSoldByHourArray.push(cookiesCurrentHour);
    }
  },
  renderCity : function() {
    let h2 = document.createElement('h2');
    h2.textContent = 'Lima';
    this.list.appendChild(h2);
    for (let i=0; i < hoursDaily.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursDaily[i]}: ${this.cookiesSoldByHourArray[i]} cookies`;
      this.list.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Daily Total: ${this.dailyTotal} cookies`;
    this.list.appendChild(totalLi);
  }
};

lima.populateCityArray();
lima.renderCity();*/
