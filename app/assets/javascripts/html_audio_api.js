//HTML AUDIO API SETTUP
var context;
var bufferLoader;


//Page Initialization
function initializePage() {

  try {
    // Audio Context is defined
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    //Sounds are buffered
    bufferLoader = new BufferLoader(context, soundURLs, finishedLoading);
    bufferLoader.load(); //ref. audio_buffer_loader.js for full functionality
    settupDOM();
    triggerEventListeners();
  }
  catch(e) {
    console.log(e);
  }
}

//User can play a sound by passing in a key that is included in the soundURL object
function playSound(key) {
  var playedSounds = {};
  playedSounds[key] = context.createBufferSource();
  playedSounds[key].buffer = bufferLoader.bufferList[key];
  playedSounds[key].connect(context.destination);
  playedSounds[key].start(0); // play the source now
}

//Function is called once sounds are buffered
function finishedLoading(bufferList) {
  console.log("sounds loaded");
}
