var context;
var bufferLoader;
var soundSources = [];
window.addEventListener('load', init, false);

function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
      'https://dl.dropboxusercontent.com/u/1316153/Cassette808_CL_01.wav',
      'https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav',
      'https://dl.dropboxusercontent.com/u/1316153/Cassette808_Cow01.wav',
      'https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav'
      ],
      finishedLoading
      );
    bufferLoader.load();
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}


function playSound(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);      // connect the source to the context's destination (the speakers)
  source.start(0);                          // play the source now
                                            // note: on older systems, may have to use deprecated noteOn(time);
}

function finishedLoading(bufferList) {
  // Create two sources and play them both together.
  soundSources[0] = context.createBufferSource();
  soundSources[1] = context.createBufferSource();
  soundSources[2] = context.createBufferSource();
  soundSources[3] = context.createBufferSource();
  soundSources[0].buffer = bufferList[0];
  soundSources[1].buffer = bufferList[1];
  soundSources[2].buffer = bufferList[2];
  soundSources[3].buffer = bufferList[3];


  soundSources[0].connect(context.destination);
  soundSources[1].connect(context.destination);
  soundSources[2].connect(context.destination);
  soundSources[3].connect(context.destination);
  // source1.start(0);
  // source2.start(1);
  // source3.start(2);
  // source4.start(3);
}


var start = $("#start");
var counter = 0;



// https://dl.dropboxusercontent.com/u/1316153/Cassette808_CL_01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_Cow01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav



