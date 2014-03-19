var context;
window.addEventListener('load', init, false);
function init() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

var snareBuffer = null;

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      snareBuffer = buffer;
      console.log(request);
      playSound(snareBuffer);
    }, onError);
  };
  request.send();
}

// function loadDogSound(url) {
//  answer = $.get(url, function(data) {return data.decodeAudioData;});
//  console.log($.parseXML(answer));
// }

function onError() {
  alert("error");
}

// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext();

function playSound(buffer) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = buffer;                    // tell the source which sound to play
  source.connect(context.destination);      // connect the source to the context's destination (the speakers)
  source.start(0);                          // play the source now
                                            // note: on older systems, may have to use deprecated noteOn(time);
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

// function startSequencer(){
//  console.log("helloooo");
//  loadSound(snare);
//  setInterval(playSound(snareBuffer), 4000);
// }


// https://dl.dropboxusercontent.com/u/1316153/Cassette808_CL_01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_Cow01.wav
// https://dl.dropboxusercontent.com/u/1316153/Cassette808_BD01.wav