var hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm',];

var pikePlaceMarket = {
  min: 17,
  max: 88,
  avg: 5.2,
  total: [],

customerPerHour: function(min, max) {
  return Math.random() * (this.max - this.min + 1) + this.min;
},

cookiesPerHour: function() {
  for(i = 0; i < hours.length; i++) {
    var totalCookies = Math.floor(this.customerPerHour() * this.avg);
    this.total.push(totalCookies)
    console.log(this.total)
    }
  },

render: function() {
  var ulElement = document.getElementById('pikePlaceMarket');
  for (i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
    li.textContent = hours[i] + ' ' + this.total[i] + ' cookies';
    ulElement.appendChild(li);
    }
  }
}

pikePlaceMarket.customerPerHour();
pikePlaceMarket.cookiesPerHour();
pikePlaceMarket.render();

var seatacAirport = {
  name: "SeaTac Airport",
  min: 6,
  max: 24,
  avg: 1.2,
  total: [],

  customerPerHour: function(min, max) {
    return Math.random() * (this.max - this.min + 1) + this.min;
  },

  cookiesPerHour: function() {
    for(i = 0; i < hours.length; i++) {
      var totalCookies = Math.floor(this.customerPerHour() * this.avg);
      this.total.push(totalCookies)
      console.log(this.total)
      }
    },

  render: function() {
    var ulElement = document.getElementById('seatacAirport');
    for (i = 0; i < hours.length; i++) {
    var li = document.createElement('li');
      li.textContent = hours[i] + ' ' + this.total[i] + ' cookies';
      ulElement.appendChild(li);
      }
    }
  }

  seatacAirport.customerPerHour();
  seatacAirport.cookiesPerHour();
  seatacAirport.render();

  var southCenter = {
    name: 'South Center',
    min: 11,
    max: 38,
    avg: 1.9,
    total: [],

    customerPerHour: function(min, max) {
      return Math.random() * (this.max - this.min + 1) + this.min;
    },

    cookiesPerHour: function() {
      for(i = 0; i < hours.length; i++) {
        var totalCookies = Math.floor(this.customerPerHour() * this.avg);
        this.total.push(totalCookies)
        console.log(this.total)
        }
      },

    render: function() {
      var ulElement = document.getElementById('southCenter');
      for (i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
        li.textContent = hours[i] + ' ' + this.total[i] + ' cookies';
        ulElement.appendChild(li);
      }
    }
  }

  southCenter.customerPerHour();
  southCenter.cookiesPerHour();
  southCenter.render();

  var belleSquare = {
    name: 'Bellevue Square',
    min: 20,
    max: 48,
    avg: 3.3,
    total: [],

    customerPerHour: function(min, max) {
      return Math.random() * (this.max - this.min + 1) + this.min;
    },

    cookiesPerHour: function() {
      for(i = 0; i < hours.length; i++) {
        var totalCookies = Math.floor(this.customerPerHour() * this.avg);
        this.total.push(totalCookies)
        console.log(this.total)
        }
      },

    render: function() {
      var ulElement = document.getElementById('belleSquare');
      for (i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
        li.textContent = hours[i] + ' ' + this.total[i] + ' cookies';
        ulElement.appendChild(li);
      }
    }
  }

  belleSquare.customerPerHour();
  belleSquare.cookiesPerHour();
  belleSquare.render();

  var alki = {
    name: 'Alki',
    min: 3,
    max: 24,
    avg: 2.6,
    total: [],

    customerPerHour: function(min, max) {
      return Math.random() * (this.max - this.min + 1) + this.min;
    },

    cookiesPerHour: function() {
      for(i = 0; i < hours.length; i++) {
        var totalCookies = Math.floor(this.customerPerHour() * this.avg);
        this.total.push(totalCookies)
        console.log(this.total)
        }
      },

    render: function() {
      var ulElement = document.getElementById('alki');
      for (i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
        li.textContent = hours[i] + ' ' + this.total[i] + ' cookies';
        ulElement.appendChild(li);
      }
    }
  }

  alki.customerPerHour();
  alki.cookiesPerHour();
  alki.render();
