function saver() {
  $("#save").on('click', function() { 
    //saveSong(user_id)
    saveSong(currentUserId);
    //get the song back and use id to create the patterns
    //songId = song's id
    //delete previous sound patterns with song_id
    //loop through all rows
    //savePattern(row, song_id);
  });
}

function saveSong(user_id) {
  //get song by its id, and if there is none then post 
    //to create song, pass name and current_user
  //.post()
}

// function savePattern(row, song_id) {
//   $.post("/sound_patterns", getPatternFromRow(row, song_id), function() {
//     console.log("saved");
//   })
// }

// function getPatternFromRow(row, song_id) {
//   var pattern = "";
//   var fileName = $($(".note.row"+row)[0]).attr("data-sound");

//   var notes = $(".note.row"+row);

//   $.each(notes, function(i, note) {
//     if ($(note).hasClass("selected")) {
//       pattern += 1;
//     } else {
//       pattern += 0;
//     };
//   })


//   return {file_name: fileName, pattern: pattern, song_id" song_id};

// }