'use strict';

let hoursDaily = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



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
    totalLi.textContent = `Daily Total: ${this.dailyTotal} cookies`;re
    this.list.appendChild(totalLi);
  }
};

lima.populateCityArray();
lima.renderCity();
