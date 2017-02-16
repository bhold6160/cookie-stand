// Function to calculate data going into table
function CookieStand(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.total = 0,
  this.totalArr = [],
  this.hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'],

  this.customerPerHour = function(){
    return Math.random() * (this.max - this.min + 1) + this.min;
  }

  this.cookiesPerHour = function() {
    for (i = 0; i < this.hours.length; i++) {
      var totalCookies = Math.floor(this.customerPerHour() * this.avg);
      this.totalArr.push(totalCookies);
      this.total += totalCookies;
      console.log(this.totalArr);
    }
  }

// function to create the table
  this.renderCookiesPerHour = function() {
    this.cookiesPerHour();
    var table = document.getElementById('table');
    var tr = document.createElement('tr');
    var dataNames = document.createElement('td');
    table.appendChild(tr);
    dataNames.textContent = this.name;
    tr.appendChild(dataNames);

    for (i = 0; i < this.hours.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.totalArr[i] + ' Customers';
      tr.appendChild(td);
    }
    var tableTotal = document.createElement('td');
    tableTotal.textContent = this.total + ' Cookies';
    tr.appendChild(tableTotal);
  }
}

// Creating new variables to add to table
var pikePlace = new CookieStand('Pike Place Market ', 17, 88, 5.2);
var seatacAirport = new CookieStand('SeaTac Airport ', 6, 24, 1.2);
var southCenter = new CookieStand('SouthCenter ', 11, 38, 1.9);
var belleSquare = new CookieStand('Bellevue Square ', 20, 48, 3.3);
var alki = new CookieStand('Alki ', 3, 24, 2.6);

//calling each new variable and adding it to the table
pikePlace.renderCookiesPerHour();
seatacAirport.renderCookiesPerHour();
southCenter.renderCookiesPerHour();
belleSquare.renderCookiesPerHour();
alki.renderCookiesPerHour();

// User input form
var userForm = getElementById('userForm');
var submitButton = getElementById('submitButton');

function formSubmit() {
 var userData = document.createElement('tr');

 var userStore = document.createElement('td');
 userStore.textContent = this.name;
 tr.appendChild(userStore);

 var userArr = document.createElement('td');
 userArr.textContent = this.totalArr[i] + ' Customers';
 tr.appendChild(userArr)

 var userTotal = document.createElement('td')
 userTotal.textContent = this.total + ' Cookies';
 tr.appendChild(userTotal)
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

}

table.addEventListener('submitButton', formSubmit);

formSubmit();
renderCookiesPerHour();
