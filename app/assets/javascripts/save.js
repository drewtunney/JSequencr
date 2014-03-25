  
//TODO add current user check before saving


function saver() {
  $("#save").on('click', function(e) {
    e.preventDefault();
    currentUserId = window.JSequencr.currentUserId
    saveSong(currentUserId);
  });

}

function saveRows() {
  var rows = $("div.sequencer-column").length;
  for(var i=0; i < rows; i++){
  saveSoundPattern(i);
  }
}


function saveSong(user_id) {
  //if there is a song do nothing, otherwise, create one and save id to variable
  
  if (songId > 0) {
    $.ajax(
      ("/songs/"+songId),
      {
        type: "PUT",
        data: {bpm: BPM, title: $("#song-title").val()},
        // function(response) {
        //   songId = response.id; 
        //   response1 = response; 
        //   saveRows()};
      }).done(function(){
        clearTracks();
        saveRows();    
      });
    
  } else {
    $.post(
      "/songs",
      {user_id: currentUserId, bpm: BPM, title: $("#song-title").val()},
      function(response) {
        songId = response.id; 
        response1 = response; 
        saveRows()}
      ).done(function() {alert("saved!")} );
  }
}

  //delete previous sound patterns with song_id
function clearTracks() {
  $.ajax({
    type: "DELETE",
    url: "/clear_tracks/" + songId,
  });
}

function saveSoundPattern(row) {
  $.post("/sound_patterns", getSoundPatternData(row), function() {
    console.log("saved");
  });
}

function getSoundPatternData(row) {
  var pattern = "";
  var fileName = $($(".note.row"+row)[0]).attr("data-sound");

  var notes = $(".note.row"+row);

  $.each(notes, function(i, note) {
    if ($(note).hasClass("selected")) {
      pattern += 1;
    } else {
      pattern += 0;
    }
  });


  return {file_name: fileName, pattern: pattern, song_id: songId};

}