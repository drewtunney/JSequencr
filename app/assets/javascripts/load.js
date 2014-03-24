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