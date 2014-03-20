var context;
var bufferLoader;
window.addEventListener('load', init, false);

function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
      'https://s3.amazonaws.com/Sounds/Ping.wav',
      'https://s3.amazonaws.com/Sounds/drumb.wav',
      'https://s3.amazonaws.com/Sounds/snare.wav',
      'https://s3.amazonaws.com/Sounds/Ping.wav',
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
  var source1 = context.createBufferSource();
  var source2 = context.createBufferSource();
  var source3 = context.createBufferSource();
  var source4 = context.createBufferSource();
  source1.buffer = bufferList[0];
  source2.buffer = bufferList[1];
  source3.buffer = bufferList[2];
  source4.buffer = bufferList[3];


  source1.connect(context.destination);
  source2.connect(context.destination);
  source3.connect(context.destination);
  source4.connect(context.destination);
  source1.start(0);
  source2.start(1);
  source3.start(2);
  source4.start(3);
}

var snare = 'https://dl.dropboxusercontent.com/u/1316153/Cassette808_Snr02.wav';
$("button#snare").on("click", function(){
  // init();
loadSound(snare);
// playSound(dogBarkingBuffer);
});

var start = $("#start");
var counter = 0;
// var intervalID;

$("#start").on("click", function(){
  console.log("helloooo");
  loadSound(snare);
  setInterval(function(){
    playSound(snareBuffer);
  }, 1000);
});



// https://dl.dropboxusercontent.com/u/1316153/Cassette808_CL_01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_Cow01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav



