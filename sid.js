var storeHours = ['10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:'];
var pikePlace = new SalmonShop ("Pike Place: ", 17, 88, 5.2);
var seaTac = new SalmonShop ("SeaTac: ", 6, 24, 1.2);
var southCenter = new SalmonShop ("Southcenter: ", 11, 38, 1.9);
var bellevue = new SalmonShop ("Bellevue Square: ", 20, 48, 3.3);
var alki = new SalmonShop ("Alki: ", 3, 24, 2.6);

function SalmonShop(storeLocation, min, max, avg) {
 this.storeLocation = storeLocation;
 this.min = min;
 this.max = max;
 this.avg = avg;
 this.cookieArrHr = [];
 this.totals = 0;
};
//Random number generator function
SalmonShop.prototype.randomNumber = function() {
 return Math.floor (Math.random() * (this.max - this.min + 1) + this.min);
};

//Average cust multiplyed by random number
SalmonShop.prototype.salesPerHr = function () {
 for (var i = 0; i< storeHours.length; i++) {
 var ranNumb = Math.round(this.randomNumber() * this.avg);
 console.log(ranNumb)

 this.cookieArrHr.push(ranNumb);
 this.totals += ranNumb;
 }
 console.log(ranNumb, this.totals);
};

// function makeItemRow(obj) {
//
// };

var form = document.getElementById('userform');
// var uTable = document.getElementById('userTable')
var table = document.getElementById('cookieData');
var createRowElement = document.createElement('tr');
 table.appendChild(createRowElement);

function genTable(){
var store = document.createElement('th');
 store.textContent = 'Store Name:';
 createRowElement.appendChild(store);
//For loop to create rows for time shop is open
for (var i = 0; i < storeHours.length; i++) {
 var storeHrs = document.createElement('th');
 storeHrs.textContent = storeHours[i];
 createRowElement.appendChild(storeHrs);
};
//Totals row is outside of for loop
var storeTot = document.createElement('th');
 storeTot.textContent = 'Total : ';
 createRowElement.appendChild(storeTot);
};
//Table creation
 genTable();

 SalmonShop.prototype.render = function() {
   this.salesPerHr();
 var storeName = document.createElement('tr')
 storeName.textContent = this.storeLocation;
 table.appendChild(storeName);
//for loop to for table data/avg * salesPerHr
 for (var i = 0; i < storeHours.length; i++) {
 var dataElement = document.createElement('td');
 dataElement.textContent = this.cookieArrHr[i];
 storeName.appendChild(dataElement);
 };
 //Totals at end of table again outside of loop
 var cookieTot = document.createElement('td');
 cookieTot.textContent = this.totals;
 storeName.appendChild(cookieTot);
 };

 SalmonShop.prototype.storeRow = function () {
   // this.salesPerHr();
   var row = document.createElement('tr');

   var cellName = document.createElement('td');
   cellName.textContent = this.storeLocation;
   row.appendChild(cellName);

   for (var k = 0; k < storeHours.length; k++) {
   var dataCell = document.createElement('td');
   dataCell.textContent = this.cookieArrHr[k];
   row.appendChild(dataCell);
   table.appendChild(row);
 };

 var totalCell = document.createElement('td');
 totalCell.textContent = this.totals;
 row.appendChild(totalCell);
};



 function handleFormSubmit(event) {
   event.preventDefault();
   console.log(event);

   var name = event.target.name.value;
   var maxCust = parseInt(event.target.maxCust.value);
   var minCust = parseInt(event.target.minCust.value);
   var avgCust = parseInt(event.target.avgCust.value);

   console.log(minCust, maxCust);

   var newStore = new SalmonShop(name, maxCust, minCust, avgCust);
   newStore.salesPerHr();
   newStore.storeRow();


   event.target.name.value = null;
   event.target.maxCust.value = null;
   event.target.minCust.value = null;
   event.target.avgCust.value = null;
 }
 form.addEventListener('submit', handleFormSubmit);
 // newStore.render();
 pikePlace.render();
 // seaTac.render();
 // southCenter.render();
 // bellevue.render();
 // alki.render();
