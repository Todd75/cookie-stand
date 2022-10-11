'use strict';





let hoursDaily = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattleList = document.getElementById('seattleList');
console.log(seattleList);
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(seattle.getRandomCust());
let h2Seattle = document.createElement('h2');
h2Seattle.textContent = 'Seattle';
seattleList.appendChild(h2Seattle);
for (let i=0; i < hoursDaily.length; i++) {
  let cookiesCurrentHour = Math.round(seattle.getRandomCust() * seattle.avg);
  console.log(i);
  console.log(cookiesCurrentHour);
  seattle.cookiesSoldByHourArray.push(cookiesCurrentHour);
}
for (let i=0; i < hoursDaily.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hoursDaily[i]}: ${seattle.cookiesSoldByHourArray[i]} cookies`;
  seattleList.appendChild(li);
}
console.log(seattle);

// toyko

let tokyoList = document.getElementById('tokyoList');
let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(tokyo.getRandomCust());
let h2Tokyo = document.createElement('h2');
h2Tokyo.textContent = 'Tokyo';
tokyoList.appendChild(h2Tokyo);
for (let i=0; i < hoursDaily.length; i++) {
  let cookiesCurrentHour = Math.round(tokyo.getRandomCust() * tokyo.avg);
  console.log(i);
  console.log(cookiesCurrentHour);
  tokyo.cookiesSoldByHourArray.push(cookiesCurrentHour);
}
for (let i=0; i < hoursDaily.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hoursDaily[i]}: ${tokyo.cookiesSoldByHourArray[i]} cookies`;
  tokyoList.appendChild(li);
}
console.log(tokyo);

// Dubai

let dubaiList = document.getElementById('dubaiList');
let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(dubai.getRandomCust());
let h2Dubai = document.createElement('h2');
h2Dubai.textContent = 'Dubai';
dubaiList.appendChild(h2Dubai);
for (let i=0; i < hoursDaily.length; i++) {
  let cookiesCurrentHour = Math.round(dubai.getRandomCust() * dubai.avg);
  console.log(i);
  console.log(cookiesCurrentHour);
  dubai.cookiesSoldByHourArray.push(cookiesCurrentHour);
}
for (let i=0; i < hoursDaily.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hoursDaily[i]}: ${dubai.cookiesSoldByHourArray[i]} cookies`;
  dubaiList.appendChild(li);
}
console.log(dubai);

// Paris

let parisList = document.getElementById('parisList');
let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(paris.getRandomCust());
let h2Paris = document.createElement('h2');
h2Paris.textContent = 'Paris';
parisList.appendChild(h2Paris);
for (let i=0; i < hoursDaily.length; i++) {
  let cookiesCurrentHour = Math.round(paris.getRandomCust() * paris.avg);
  console.log(i);
  console.log(cookiesCurrentHour);
  paris.cookiesSoldByHourArray.push(cookiesCurrentHour);
}
for (let i=0; i < hoursDaily.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hoursDaily[i]}: ${paris.cookiesSoldByHourArray[i]} cookies`;
  parisList.appendChild(li);
}
console.log(paris);

// Lima

let limaList = document.getElementById('limaList');
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  dailyTotal: 0,
  cookiesSoldByHourArray: [],
  getRandomCust: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};
console.log(lima.getRandomCust());
let h2Lima = document.createElement('h2');
h2Lima.textContent = 'Lima';
limaList.appendChild(h2Lima);
for (let i=0; i < hoursDaily.length; i++) {
  let cookiesCurrentHour = Math.round(lima.getRandomCust() * lima.avg);
  console.log(i);
  console.log(cookiesCurrentHour);
  lima.cookiesSoldByHourArray.push(cookiesCurrentHour);
}
for (let i=0; i < hoursDaily.length; i++) {
  let li = document.createElement('li');
  li.textContent = `${hoursDaily[i]}: ${lima.cookiesSoldByHourArray[i]} cookies`;
  limaList.appendChild(li);
}
console.log(lima);
