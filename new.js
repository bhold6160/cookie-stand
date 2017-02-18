// Creating new variables to add to table
var shopHours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
var pikePlace = new CookieShop('Pike Place Market ', 17, 88, 5.2);
var seatacAirport = new CookieShop('SeaTac Airport ', 6, 24, 1.2);
var southCenter = new CookieShop('SouthCenter ', 11, 38, 1.9);
var belleSquare = new CookieShop('Bellevue Square ', 20, 48, 3.3);
var alki = new CookieShop('Alki ', 3, 24, 2.6);

function CookieShop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourArr = [];
  this.total = 0;
  this.hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'],
}
// Random number generator
CookieShop.prototype.randomNumber = function() {
  return Math.random() * (this.max - this.min + 1) + this.min;
}

//Average customer per hour multiplyed by random number
CookieShop.prototype.cookiesPerHour = function() {
  for (i = 0; i < this.hours.length; i++) {
    var totalCustomers = Math.floor(this.customerPerHour() * this.avg);

    this.totalArr.push(totalCustomers);
    this.total += totalCustomers;
    console.log(this.totalArr);
  }
}

var form = document.getElementById('userForm');
var table = document.getElementById('table')
var makeRowElement = document.createElement('tr');
table.appendChild(makeRowElement);

function genTable() {
  var storeName = document.createElement('td');
  storeName.textContent = 'Store Name';
  makeRowElement.appendChild(storeName);

// For loop for shop hours
for (i = 0; i < shopHours.length; i++) {
  var hours = document.createElement('td');
  hours.textContent = shopHours[i];
  makeRowElement.appendChild(hours);
}

// Row for shop totals
 var shopTotal = document.createElement('td');
 shopTotal.textContent = 'Total ';
 makeRowElement.appendChild(shopTotal);
}

// Calling to create table
genTable();

// Rendering data to page
CookieShop.prototype.render = function() {
  this.cookiesPerHour();
  var storeName = document.createElement('tr')
  storeName.textContent = this.name;
  table.appendChild(storeName);

  // For loop for average customers * sales per hour
  for (i = 0; i < shopHours.length; i++) {
    var dataElement = document.createElement('td');
    dataElement.textContent = this.hourArr[i];
    storeName.appendChild(dataElement);
  }

  // Totals
  var cookieTotal = document.createElement('td');
  cookieTotal.textContent = this.total;
  storeName.appendChild(cookieTotal);
}

CookieShop.prototype.shopRow = function() {

  var row = document.createElement('tr');

  var cellName = document.createElement('td');
  cellName.textContent = this.name;
  row.appendChild(cellName);

  for (i = 0; i < shopHours.length; i++) {
    var dataCell = document.createElement('td');
    dataCell.textContent = this.hourArr[i];
    row.appendChild(dataCell);
    table.appendChild(row);
  }

  var totalCell = document.createElement('td');
  totalCell.textContent = this.total;
  row.appendChild(totalCell);
}

function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var name = event.target.name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);

  var newShop = new CookieShop(name, min, max, avg);
  newShop.cookiesPerHour();
  newShop.shopRow();

  event.target.name.value = null;
  event.target.max.value = null;
  event.target.min.value = null;
  event.target.avg.value = null;
}

form.addEventListener('submit',
handleFormSubmit);

pikePlace.render();
seatacAirport.render();
southCenter.render();
belleSquare.render();
alki.render();
