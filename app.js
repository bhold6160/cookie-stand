
var pikePlaceMarket = {
  storeName: 'Pike Place Market'
  minPeeps: 17,
  maxPeeps: 88,
  avgCookies: 5.2,
  total: 0,
  totalArr: [],
  hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

customerPerHour: function(min, max) {
  return Math.random() * (this.maxPeeps - this.minPeeps + 1) + this.minPeeps;
},

cookiesPerHour: function() {
  for(i = 0; i < hours.length; i++) {
    var totalCookies = Math.floor(this.customerPerHour() * this.avgCookies);
    this.totalArr.push(totalCookies)
    this.total += totalCookies
    console.log(this.totalArr)
    }
  },

render: function() {
  var ulElement = document.getElementById('pike-place');
  for (i = 0; i < 8; i++) {
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

var seaAirport = {
  storeName: "SeaTac Airport",
  minPeeps: 6,
  maxPeeps: 24,
  avgCookies: 1.2,
  totalArr: [],
  total: 0,
  hours: ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'];

  customerPerHour: function(min, max) {
    return Math.random() * (this.maxPeeps - this.minPeeps + 1) - this.minPeeps;
  }
}
