
// Creating new variables to add to table
var totalArr = [];
var storeHours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var pikePlace = new CookieStand('Pike Place Market ', 17, 88, 5.2);
var seatacAirport = new CookieStand('SeaTac Airport ', 6, 24, 1.2);
var southCenter = new CookieStand('SouthCenter ', 11, 38, 1.9);
var belleSquare = new CookieStand('Bellevue Square ', 20, 48, 3.3);
var alki = new CookieStand('Alki ', 3, 24, 2.6);


// Constructor function to calculate data going into table
function CookieStand(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.total = 0,
  this.hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
  this.totalCookiesArr = [],
  totalArr.push(this),

  // Generate random number
  this.randomNumber = function () {
    return Math.random() * (this.max - this.min + 1) + this.min;
  };

  this.customerPerHour = function () {
    for (var i = 0; i < this.hours.length; i++) {
      var totalCookies = Math.floor(this.randomNumber() * this.avg);
      this.totalCookiesArr.push(totalCookies);
      this.total += totalCookies;
      console.log(this.totalCookiesArr);
    }
  };

  // function to create the table
  CookieStand.prototype.renderCookiesPerHour = function () {
    this.customerPerHour();
    var table = document.getElementById('table');
    var tr = document.createElement('tr');
    var dataNames = document.createElement('td');
    table.appendChild(tr);
    dataNames.textContent = this.name;
    tr.appendChild(dataNames);

    for (var i = 0; i < this.hours.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.totalCookiesArr[i] + ' Customers';
      tr.appendChild(td);
    }

    var tableTotal = document.createElement('td');
    tableTotal.textContent = this.total + ' Cookies';
    tr.appendChild(tableTotal);
  };
}

//calling each new variable and adding it to the table
pikePlace.renderCookiesPerHour();
seatacAirport.renderCookiesPerHour();
southCenter.renderCookiesPerHour();
belleSquare.renderCookiesPerHour();
alki.renderCookiesPerHour();

var form = document.getElementById('userForm');
var table = document.getElementById('table');
var createRowElement = document.createElement('tr');
table.appendChild(createRowElement);

// Generating new table for user input
function generateTable() {
  var store = document.createElement('td');
  store.textContent = this.name;
  createRowElement.appendChild(store);

  // For loop to create rows for user input shop hours
  for (var i = 0; i < storeHours.length; i++) {
    var perHour = document.createElement('td');
    perHour.textContent = this.totalCookiesArr;
    createRowElement.appendChild(perHour);
  }

  // user Total
  var storeTotals = document.createElement('td');
  storeTotals.textContent = this.total;
  createRowElement.appendChild(storeTotals);
}

// Form submit event
function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var name = event.target.name.value;
  var min = parseFloat(event.target.min.value);
  var max = parseFloat(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  var newStore = new CookieStand(name, min, max, avg);
  newStore.customerPerHour();
  newStore.renderCookiesPerHour();

  event.target.name.value = null;
  event.target.max.value = null;
  event.target.min.value = null;
  event.target.avg.value = null;

  var totalsRow = document.getElementById('totalsRow');
  totalsRow.remove(1);
  totalTotals();
}

form.addEventListener('submit',handleFormSubmit);

  var totalTotals = function(){

    var totalsRow = document.createElement('tr')

    table.appendChild(totalsRow);
    var totalTodData = document.createElement('td');
    totalTodData.textContent = 'Totals'
    totalsRow.appendChild(totalTodData);

    for (var i = 1; i < storeHours.length; i++) {
      var totalPerHour = document.createElement('td');
      var totalData = 0;
      for (var j = 0; j < totalArr.length; j++) {
        totalData += totalArr[j].totalCookiesArr[i]
      }
      totalPerHour.textContent = totalData;
      totalsRow.appendChild(totalPerHour);
    }

      var grandTotalData = document.createElement('td');

      var grandTotal = 0;
      for (i = 0; i < totalArr.length; i++) {
        grandTotal += totalArr[i].total;
      }

      grandTotalData.textContent = grandTotal;
      totalsRow.appendChild(grandTotalData);
  }

  totalTotals();
