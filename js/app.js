'use strict';

let hoursDaily = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let rushHourCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];

let everyStore = [];

let table = document.querySelectorAll('table');

function createHeader(){
  let emptyTd = document.createElement('td');
  let testerRow = document.createElement('tr');
  testerRow.appendChild(emptyTd);
  for (let i = 0; i < hoursDaily.length; i++) {
    let tdOne = document.createElement('td');
    tdOne.textContent = hoursDaily[i];
    testerRow.appendChild(tdOne);
  }
}
let lastTd = document.createElement('td');
lastTd.textContext = 'Daily Totals by Location';
testerRow.appendChild(lastTd);

table.appendChild(trialRow);

function StoreData(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.dailyTotal = 0;
  this.cookiesPerHourSalesArray = [];
  everyStore.push(this);
}
StoreData.prototype.getRandomCustomers = function() {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
StoreData.prototype.cookieDataNumbers= function(){
  for(let i = 0; i < hoursDaily.length; i++) {
    let cookiesCurrentHour = Math.ceil(this.getRandomCustomers() * this.avg);
    this.cookiesPerHourSalesArray.push(cookiesCurrentHour);
    this.dailyTotal = this.dailyTotal + cookiesCurrentHour;
    console.log(cookiesCurrentHour, this.dailyTotal);
  }
};
StoreData.prototype.renderData = function() {
  let 
  for (let i = 0; i < hoursDaily.length; i++) {

  }
}
