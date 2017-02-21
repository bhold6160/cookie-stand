
var pikePlaceMarket = {
    name: 'Pike Place Market'
    min: 17,
    max: 88,
    avg: 5.2,
    total: 0,
    totalArr: [],
    hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
  }

  var seatacAirport = {
    name: "SeaTac Airport",
    min: 6,
    max: 24,
    avg: 1.2,
    totalArr: [],
    total: 0,
    hours: ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
  }

  var southCenter = {
    name: 'South Center',
    min: 11,
    max: 38,
    avg: 1.9,
    total: 0,
    totalArr: [],
    hours: ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
  }

  var belleSquare = {
    name: Bellevue 'Square',
    min: 20,
    max: 48,
    avg: 3.3,
    total: 0,
    totalArr: [],
    hours: ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
  }

  var alki = {
    name: 'Alki',
    min: 3,
    max: 24,
    avg: 2.6,
    total: 0,
    totalArr: [],
    hours: ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];
  }

customerPerHour: function(min, max) {
  return Math.random() * (this.max - this.min + 1) + this.min;
},

cookiesPerHour: function() {
  for(i = 0; i < this.hours.length; i++) {
    var totalCookies = Math.floor(this.customerPerHour() * this.avg);
    this.totalArr.push(totalCookies)
    this.total += totalCookies
    console.log(this.totalArr)
    }
  },

render: function() {
  var ulElement = document.getElementById('pikePlaceMarketlace', 'seatacAirport');
  for (i = 0; i < this.hours.length; i++) {
  var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + this.totalArr[i] + ' ' + ' cookies';
    ulElement.appendChild(li);
    }
    li.textContent = 'Totals ' + this.total;
    ulElement.appendChild[i];
  }
}

pikePlaceMarket.customerPerHour();
pikePlaceMarket.cookiesPerHour();
pikePlaceMarket.render();
