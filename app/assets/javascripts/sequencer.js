//create a transpose function
function transpose(array) {
  return Object.keys(array[0]).map(
    function (column) {
      return array.map(function (row) { return row[column]; }); }
  );
}

//User can change color on click
$("div.note").on("click", function(){
  $(this).toggleClass("selected");
});


//Cyclying through the grid

var intervalID = window.setInterval(gridCycle, 1000);
var intervalCounter = 1;

function gridCycle(){
  $("div.column").children().removeClass("loop-timer");
  if (intervalCounter > 4){
    intervalCounter = 1;
  }
  console.log(intervalCounter);
  $("div#column" + intervalCounter).children().toggleClass("loop-timer");
  intervalCounter++;


  // for (var intervalCounter = 1, intervalCounter < 5, intervalCounter++) {
  //   var children = $("div#column" + intervalCounter).children();
  //   children.toggleClass("loop-timer");
  // }
  // $("div#column1");
  // intervalCounter++;
  // console.log(intervalCounter);
}
