function transpose(array) {
  return Object.keys(array[0]).map(
    function (column) {
      return array.map(function (row) { return row[column]; }); }
  );
}

  $("div.note").on("click", function(){
    $(this).toggleClass("selected");
  });
