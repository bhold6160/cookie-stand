var hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm',];

var pikePlaceMarket = {
  minPeeps: 17,
  maxPeeps: 88,
  avgCookies: 5.2,
  total: [],

customerPerHour: function(min, max) {
  return Math.random() * (this.maxPeeps - this.minPeeps + 1) + this.minPeeps;
},

cookiesPerHour: function() {
  for(i = 0; i < hours.length; i++) {
    var totalCookies = Math.floor(this.customerPerHour() * this.avgCookies);
    this.total.push(totalCookies)
    console.log(this.total)
    }
  },

render: function() {
  var ulElement = document.getElementById('pike-place');
  for (i = 0; i < 8; i++) {
  var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + this.total[i] + ' cookies';
    ulElement.appendChild(li);
    }
  }
}

pikePlaceMarket.customerPerHour();
pikePlaceMarket.cookiesPerHour();
pikePlaceMarket.render();
