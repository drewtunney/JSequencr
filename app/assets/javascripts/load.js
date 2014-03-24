function loadSong(loadSongId) {
  //This will load a song
  //It uses the argument loadSongId
  loadedSong = $.getJSON("/songs/" + loadSongId);
  //It makes an ajax call to Song title and bpm
  //Then ajax call to get the sound_patterns
  loadedSoundPatterns = $.getJSON("/sound_patterns_of_song/" + loadSongId);
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