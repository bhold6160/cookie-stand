var allItems = [];
var storeInfo = {
  name: '',
  min: 0,
  max: 0,
  avg: 0,
  total: 0
};

var form = document.getElementById('form');
var table = document.getElementById('table');
var tableBody = document.getElementById('tableBody');
var tfoot = document.getElementsByTagName('tfoot')[0];

// Creating new variables to add to table
var pikePlace = new CookieStand('Pike Place Market ', 17, 88, 5.2);
var seatacAirport = new CookieStand('SeaTac Airport ', 6, 24, 1.2);
var southCenter = new CookieStand('SouthCenter ', 11, 38, 1.9);
var belleSquare = new CookieStand('Bellevue Square ', 20, 48, 3.3);
var alki = new CookieStand('Alki ', 3, 24, 2.6);

function CookieStand(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.total = 0,
  this.totalArr = [],
  this.hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'],
  allItems.push(this);
}

CookieStand.prototype.customerPerHour = function(){
  return Math.random() * (this.max - this.min + 1) + this.min;
}

CookieStand.prototype.totalCookies = function() {
  return Math.floor() * this.avg;
}

CookieStand.prototype.updateStoreInfo = function() {
  storeInfo.name += this.name;
  storeInfo.min += this.min;
  storeInfo.max += this.max;
  storeInfo.avg += this.avg;
  storeInfo.total += this.total;
}

CookieStand.prototype.storeMethods = function() {
  this.customerPerHour();
  this.totalCookies();
  this.updateStoreInfo();
}

function updateAllInfo() {
  for (var addData of allItems) {
    addData.storeMethods();
  }
}

// Calculating function
function makeFormRow(cellAdd) {
  var row = document.createElement('tr');

  var nameCell = document.createElement('td');
  nameCell.textContent = cellAdd.name;
  row.appendChild(nameCell);

  var minCell = document.createElement('td');
  minCell.textContent = cellAdd.min;
  row.appendChild(minCell);

  var maxCell = document.createElement('td');
  minCell.textContent = cellAdd.max;
  row.appendChild(maxCell);

  var avgCell = document.createElement('td');
  avgCell.textContent = cellAdd.avg;
  row.appendChild(avgCell);

  var totalCell = document.createElement('td');
  totalCell.textContent = cellAdd.total;
  row.appendChild(totalCell);

  tableBody.appendChild(row);
}

function updateObjects() {
  for (var addData of allItems) {
    makeFormRow(addData);
  }
}

// adding user input to form
function formSubmit() {
 var userData = document.createElement('tr');

 var userStore = document.createElement('td');
 userStore.textContent = this.name;
 userData.appendChild(userStore);

 var userArr = document.createElement('td');
 userArr.textContent = this.totalArr[i] + ' Customers';
 userData.appendChild(userArr)

 var userTotal = document.createElement('td')
 userTotal.textContent = this.total + ' Cookies';
 userData.appendChild(userTotal)

 tfoot.appendChild(userData)
}

// Handling event
function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var userName = event.target.name.value;
  var userMin = parseFloat(event.target.min.value);
  var userMax = parseFloat(event.target.max.value);
  var userAvg = parseFloat(event.target.avg.value);

  var userNew = new CookieStand(name, min, max, avg);
  userNew.renderCookiesPerHour();

  newItemRow(userNew);
  tfoot.innerHTML = '';
  formSubmit();

  event.target.name.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}

// form.addEventListener('submitButton', handleFormSubmit);

updateAllInfo();
updateObjects();
formSubmit();
