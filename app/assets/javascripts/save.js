function saver() {
  $("#save").on('click', function() {
    savePattern();
  });
}

function savePattern() {
  $.post("/sound_patterns", getPatternFromRow(0), function() {
    console.log("saved");
  })
}

function getPatternFromRow(row) {
  var pattern = "";
  var fileName = $($(".note.row"+row)[0]).attr("data-sound");

  var notes = $(".note.row"+row);

  $.each(notes, function(i, note) {
    if ($(note).hasClass("selected")) {
      pattern += 1;
    } else {
      pattern += 0;
    };
  })


  return {file_name: fileName, pattern: pattern};

}