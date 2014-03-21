var context;
var bufferLoader;

//We will try to consolidate the sound sources in to one object, we just need the values from the object to be in the array so we may pass it when initializing the new BufferLoader

var soundsToPlay = {};

var soundURLs = [
  'https://s3.amazonaws.com/Sounds/snare_2.wav',
  'https://s3.amazonaws.com/Sounds/cow_bell.wav',
  'https://s3.amazonaws.com/Sounds/conga.wav',
  'https://s3.amazonaws.com/Sounds/hand_clap.wav'
];

//Page Initialize
window.addEventListener('load', init, false);

function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    // needs souldURL - how can we make this more dynamic? load after we get a return from aws? 

    bufferLoader = new BufferLoader(context, soundURLs, finishedLoading);
    bufferLoader.load();
    //We need to initialize the notes with data-sound info reflecting the url suffix so that we may query it when we want to play the sound
    settupDOM();
  }
  catch(e) {
    console.log(e);
  }
}

//the index we are getting still corresponds to the position in the array, ideally we would like to avoid this
function playSound(soundSource, fileName, index) {
  soundSource[fileName] = context.createBufferSource();
  soundSource[fileName].buffer = bufferLoader.bufferList[index];
  soundSource[fileName].connect(context.destination);

  soundSource[fileName].start(0); // play the source now
}

//this is an example function and not utilized
function finishedLoading(bufferList) {
  $.each(fileNames, function(index, fileName){
    soundURLs[index] = context.createBufferSource();
    soundURLs[index].buffer = bufferLoader.bufferList[0];
    soundURLs[index].connect(context.destination);
  });
}

  // Create two sources and play them both together.
  // soundSources[0] = context.createBufferSource();
  // soundSources[1] = context.createBufferSource();
  // soundSources[2] = context.createBufferSource();
  // soundSources[3] = context.createBufferSource();
  // soundSources[0].buffer = bufferList[0];
  // soundSources[1].buffer = bufferList[1];
  // soundSources[2].buffer = bufferList[2];
  // soundSources[3].buffer = bufferList[3];


  // soundSources[0].connect(context.destination);
  // soundSources[1].connect(context.destination);
  // soundSources[2].connect(context.destination);
  // soundSources[3].connect(context.destination);
// }
