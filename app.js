var hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm',];

var pikePlaceMarket = { // Declaring variable as an object
  minPeeps: 17, // Properties of the object...
  maxPeeps: 88,
  avgCookies: 5.2,
  total: 0,
  totalArr: [],

customerPerHour: function(min, max) { // Declaring function with parameters min and max.
  return Math.random() * (this.maxPeeps - this.minPeeps + 1) + this.minPeeps; // first finding the the result of max - min + min and multiply the result by a randomly generated number.
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

// Create table function
table: function() {
  var body = document.getElementById('thead')[0];
  var tbl = document.createElement('table');
  var tblBody = document.createElement('tbody');
}

  for(i = 0; i < table.length; i++) {
  var row = document.createElement('tr');
}

  for(j = 0; j < tableData.length; j++) {
    var cell = document.createElement('td');
    var cellText = document.createTextNode('cell in row ' + i + 'column ' + j);
    cell.appendChild(cellText);
    row.appendChild(cell);

    tblBody.appendChild(row);
    tblBody.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute('border', '2');
}
