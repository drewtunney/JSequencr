function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = {}; //changed bufferList to a hash from an array
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, key) { //changed index to key
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[key] = buffer;  //refactored the bufferList AudioBuffers to be a hash
        if (++loader.loadCount === Object.keys(loader.bufferList).length)
          loader.onload(loader.bufferList);
        // loader.bufferList[index] = buffer;
        // if (++loader.loadCount == loader.urlList.length)
        //   loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  };

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  };

  request.send();
};

BufferLoader.prototype.load = function() {
  for (var key in this.urlList) {             //iterating through a hash
    this.loadBuffer(this.urlList[key], key);
  }

  // for (var i = 0; i < this.urlList.length; ++i)
  // this.loadBuffer(this.urlList[i], i);
};