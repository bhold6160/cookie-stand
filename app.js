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

  this.renderCookiesPerHour = function() {
    this.cookiesPerHour();
    var table = document.getElementById('table');
    var tr = document.createElement('tr');
    var dataNames = document.createElement('td');
    table.appendChild(tr);
    dataNames.appendChild(document.createTextNode(this.name));
    tr.appendChild(dataNames);

    for (i = 0; i < this.hours.length; i++) {
      var td = document.createElement('td');
      td.textContent = this.totalArr[i] + ' Cookies';
      tr.appendChild(td);
    }
    var tableData = document.createElement('td');
    tableData.textContent = this.total + ' Cookies';
    tr.appendChild(tableData);
  }
}

var pikePlace = new CookieStand('Pike Place Market ', 17, 88, 5.2);
pikePlace.renderCookiesPerHour();

var seatacAirport = new CookieStand('SeaTac Airport ', 6, 24, 1.2);
seatacAirport.renderCookiesPerHour();

var southCenter = new CookieStand('SouthCenter ', 11, 38, 1.9);
southCenter.renderCookiesPerHour();

var belleSquare = new CookieStand('Bellevue Square ', 20, 48, 3.3);
belleSquare.renderCookiesPerHour();

var alki = new CookieStand('Alki ', 3, 24, 2.6);
alki.renderCookiesPerHour();
