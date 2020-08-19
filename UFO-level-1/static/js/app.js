//Add data to webpage using javascript and d3
// Assign data from data.js to a vaiable

var ufoData = data;

//reference table body

var tbody = d3.select("tbody");


// loop through data print to console.log
ufoData.forEach(function(ufoSightings) {
    console.log(ufoSightings);

    // append rows to table
     var row = tbody.append("tr");

     // loop through objects to get keys and values
     Object.entries(ufoSightings).forEach(function([key, value]) {
     console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
      var cell = row.append("td");

      // add values to cells
      cell.text(value);
     });
  });

//Listening for events and filter to search data by date

//Select button
var button = d3.select("#filter-btn");

//Select form 
var form = d3.select("#form");
//create event handlers

button.on("click", runEnter);
form.on("submit", runEnter);

// Complete event handler function

function runEnter(){

  // Prevent the page from refreshing
  d3.event.preventDefault();

   // Select the input element and get the raw HTML node
   var inputElement = d3.select("#datetime");

   // Get the value property of the input element
   var inputValue = inputElement.property("value");
 
   console.log(inputValue);

};
   
var filteredData = []; 


var ufofilteredData = ufoData.filter(ufoData => parseInt(ufoData.datetime) === inputValue);
filteredData.push(ufofilteredData);
   
    
console.log(filteredData);

 




// ufofilteredData.forEach(function(ufoSitings) {
//   console.log(ufoSitings);

//   append rows to table
//    var row = tbody.append("tr");

//    loop through objects to get keys and values
//    Object.entries(ufoSitings).forEach(function([key, value]) {
//    console.log(key, value);
//   Append a cell to the row for each value
//   in the weather report object
//     var cell = row.append("td");

//     add values to cells
//     cell.text(value);
//    });
// });