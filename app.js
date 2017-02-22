var hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm',];
var total = 0;
var totalArr = [];

var pikePlaceMarket = {
    name: 'Pike Place Market',
    min: 17,
    max: 88,
    avg: 5.2
  }

  var seatacAirport = {
    name: "SeaTac Airport",
    min: 6,
    max: 24,
    avg: 1.2
  }

  var southCenter = {
    name: 'South Center',
    min: 11,
    max: 38,
    avg: 1.9
  }

  var belleSquare = {
    name: 'Bellevue Square',
    min: 20,
    max: 48,
    avg: 3.3
  }

  var alki = {
    name: 'Alki',
    min: 3,
    max: 24,
    avg: 2.6
  };

function customerPerHour(min, max) {
  console.log(customerPerHour)
  return Math.random() * (this.max - this.min + 1) + this.min;
}

function cookiesPerHour() {
  console.log(cookiesPerHour)
  for(var i = 0; i < hours.length; i++) {
    var totalCookies = Math.floor(this.customerPerHour() * this.avg);
    this.totalArr.push(totalCookies)
    this.total += totalCookies
    console.log(this.totalArr)
    }
  }

 function render() {
   this.cookiesPerHour();
   console.log(render);
  var ulElement = document.getElementById('pikePlaceMarket');
  var storeName = document.createElement('li')

  for (var i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + this.totalArr[i] + ' ' + ' cookies';
    ulElement.appendChild(li);
    }
    li.textContent = 'Total ' + this.total;
    ulElement.appendChild[i];
  }

customerPerHour();
cookiesPerHour();
render();

/////////////////////////
