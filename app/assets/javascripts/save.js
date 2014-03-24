
//TODO add current user check before saving
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
  //if there is a song do nothing, otherwise, create one and save id to variable
  if (songId > 0) {
    console.log("Song with id " + songId + "exists");
  } else {
    $.post(
      "/songs", 
      {user_id: currentUserId, bpm: BPM, title: $("#song-title").val()},
      function(response) {songId = response.id;}
      );

  }
  
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