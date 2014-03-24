//HTML AUDIO API SETTUP

var context;
var bufferLoader;

//We will try to consolidate the sound sources in to one object, we just need the values from the object to be in the array so we may pass it when initializing the new BufferLoader


window.addEventListener('load', init, false);

function init() {
  try {
      // getCurrentUser();
      //first we see if anyone is logged in

    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    // needs souldURL - how can we make this more dynamic? load after we get a return from aws? 

    bufferLoader = new BufferLoader(context, soundURLs, finishedLoading);
    bufferLoader.load();
    settupDOM();
    //We need to initialize the notes with data-sound info reflecting the url suffix so that we may query it when we want to play the sound
  }
  catch(e) {
    console.log(e);
  }
}

//the index we are getting still corresponds to the position in the array, ideally we would like to avoid this
function playSound(key) {
  var playedSounds = {};
  playedSounds[key] = context.createBufferSource();
  playedSounds[key].buffer = bufferLoader.bufferList[key];
  playedSounds[key].connect(context.destination);
  playedSounds[key].start(0); // play the source now
}

function finishedLoading(bufferList) {
  console.log("sounds loaded");
}
