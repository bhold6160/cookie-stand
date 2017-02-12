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
    // this.total +=
    console.log(this.total)
    }
  },

// this.render = function() {
// var storeLocation = document.getElementById('pike-place')
// var liElement = document.createElement()
// }

render: function() {
var ul = document.getElementById('pike-place');
var child;
var total = 0;

for (i = 0; i < 8; i++) {
  var li = document.createElement('li');
 li.textContent = hours[i] + ' ' + this.total[i] + ' cookies';
 ul.appendChild(li);







//   if (i < 2) {
//   child.textContent = ( (10 + i) +  ' am:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
// } else if (i === 2) {
//   cild.textContent = ('12 pm:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
// } else {
//   cild.textContent = ((i - 2) + ' pm:' + ' ' + pikePlace.cookiesPerHour[i] + ' cookies');
// }
//
// total += pikePlace.cookiesPerHour[i];
// parent.appendChild(child);
// console.log(total);
    }
  }
}

pikePlaceMarket.render()
