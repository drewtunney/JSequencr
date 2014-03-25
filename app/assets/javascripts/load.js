

$("body").on("click", ".song-choices", function(){
  $(".suite-wrapper").children(".sequencer-column").remove();
  $(".suite-wrapper").children("#drop-column").children().remove();
  var thisId = $(this).attr("data-song-id");
  loadSong(thisId);
  $("div ul li").remove();
  $(".page-overlay").css("display", "none");
  listSoundChoices();
})

$(".exit-button").on("click", function(){
  $("div ul li").remove();
  listSoundChoices();
})

function listUserSongs() {
  userSongs = $.getJSON("/user/" + window.JSequencr.currentUserId + "/songs").done(
    function(){
      var songListLength = userSongs.responseJSON.length
      for (var i = 0; i < songListLength; i++) {
        var songId = userSongs.responseJSON[i].id;
        var title =  userSongs.responseJSON[i].title;
        $(".all-sounds ul").append($("<li>").append(title).addClass("song-choices").attr("data-song-id", songId));    
      }
    }
  )
}

// function listSoundChoices() {
//   $.each(Object.keys(soundURLs), function( index, url) {
//     $(".all-sounds ul").append($("<li>").append(url).addClass("sound-choices"));
//   });
// }


function loadSong(loadSongId) {
  //This will load a song
  //It uses the argument loadSongId
  loadedSong = $.getJSON("/songs/" + loadSongId).done(
    function(){
      BPM = loadedSong.responseJSON.bpm;
    });
  //It makes an ajax call to Song title and bpm
  //Then ajax call to get the sound_patterns
  loadedSoundPatterns = $.getJSON("/sound_patterns_of_song/" + loadSongId).done(loadRows);
  //set url list hash equal to array results from that ajax call
  //populate board
}

function loadedBpm(){
  return loadedSong.responseJSON.bpm
}

function loadedTitle(){
  return loadedSong.responseJSON.title
}

function loadedPatternsArray(){
  var patternObjects = loadedSoundPatterns.responseJSON;
  var patternArray = [];

  for (var i = 0; i < patternObjects.length; i++) {
    patternArray.push(patternObjects[i].pattern);
  };

  return patternArray;
}

function loadedPatternsHash(){
  var patternObjects = loadedSoundPatterns.responseJSON;
  var patternHash = {};

  for (var i = 0; i < patternObjects.length; i++) {
    patternHash[patternObjects[i].file_name] = patternObjects[i].pattern;
  };

  return patternHash;
}


function loadRows(){
  var columnCount = loadedPatternsArray()[0].length;

  for (var j = 0; j < loadedPatternsArray().length; j++){
    var newNote;
    var newSoundTitle;
    var rowCount = $("h3.sound-title").length;
    var newSound = loadedSoundPatterns.responseJSON[j].file_name;
    var includeX = $("<p>").text("x").addClass("remove-row");

    var allColumns = $(".sequencer-column");
    
    if ( rowCount > 0) {  //if there are existing columns add a the new notes to each column
      $.each(allColumns, function(index, column){
        newNote = $("<div>").addClass("note row" + rowCount).attr("data-sound", newSound);
        if (loadedPatternsArray()[j][index] === "1") {
          newNote.addClass("selected");
        };
        $(column).append(newNote);
      });
      newSoundTitle = $("<h3>").addClass("sound-title").attr("name", rowCount).text(newSound);
      $(newSoundTitle).appendTo("#drop-column");
      $(includeX).attr("id", rowCount).appendTo("#drop-column");
    } else {  //create the same number of columns determined by the songLength variable and add the notes to the columns
        for (var i = 0; i < songLength; i++){
          newNote = $("<div>").addClass("note row" + rowCount).attr("data-sound", newSound);
          if (loadedPatternsArray()[j][i] === "1") {
            newNote.addClass("selected");
          };
          $('.suite-wrapper').append($("<div class='sequencer-column' id='column"+ i + "'>").append(newNote));
        }

      newSoundTitle = $("<h3>").addClass("sound-title").attr("name", rowCount).text(newSound);
      $(newSoundTitle).appendTo("#drop-column");
      // includeX.attr("id", rowCount).appe
      $(includeX).attr("id", rowCount).appendTo("#drop-column");
    }

  }
};




