//Settup Eventlisteners for General Functionality
function triggerEventListeners(){
  //all notes can be selected
  $("body").on("click", "div.note", function(){
    $(this).toggleClass("selected");
  });
  //start&pause button starts and pauses timer
  $("button#start-pause-timer").on('click', function(){
    if (songIsPlaying) {
      songIsPlaying = false;
      clearInterval(intervalID);
      $(this).text("Start Timer");
    } else {
      songIsPlaying = true;
      intervalID = window.setInterval(gridCycle, bpmToBeatVal(BPM));
      $(this).text("Pause Timer");
    }
  });
  //reset timer button resets the timer
  $("button#reset-timer").on('click', function(){
    intervalCounter = 0;
    gridCycle();
  });
  //BPM is displayed
  $('#display').html("BPM: " + BPM);
  //Sound titles will display the page overlay on click
  $("body").on("click", "h3.sound-title", function(){
    $(".page-overlay").css("display", "block");
    var rowUserWantsToChange = $(this).attr("name");
    setOverlayEventListenersFromH3(rowUserWantsToChange);
  });
  //exit button exits out of overlay
  $(".exit-button").on("click", function(){
    $(".page-overlay").css("display", "none");
  });
  //Add row ("plus") button displays the overlay ready to add a row
  $("body").on("click", ".add-row", function(){
    $(".page-overlay").css("display", "block");
    setOverlayEventListenersFromPlus();
  });
  //Signup link renders an effect for the signup form
  $(".auth-user h2#sign-up-link").on("click", function(){
    showSignUpForm();
  });
  //Login link renders an effect for the login form
  $(".auth-user h2#log-in-link").on("click", function(){
    showLoginFormWithEffect();
  });
  //Click save button to save the song
  $("#save").on('click', function(e) {
    e.preventDefault();
    currentUserId = window.JSequencr.currentUserId;
    saveSong(currentUserId);
  });
}

//Sign up event Listeners
function addSignUpSubmitEventListener(){
$("#sign-up-form").on("submit", function(e){
  e.preventDefault();
  console.log("i have been submitted");
  console.log(e);
  newUser(e.currentTarget[0].value, e.currentTarget[1].value, e.currentTarget[2].value, e.currentTarget[3].value);
  $("#sign-up-form")[0].reset();
  });
}

function hideSignUpForm(){
  $("#sign-up-form").css('display', 'none');
}

function showSignUpForm(){
  $("#sign-up-form").css('display', 'block');
  $("#sign-up-form").effect("slide", 1000);
}

function showLoginFormWithEffect(){
  $("#log-in-form").css('display', 'block');
  $("#log-in-form").effect("slide", 1000);
}

//Login&Logout Eventlisteners
function addLoginSubmitEventListener(){
  $("#log-in-form").on("submit", function(e){
    e.preventDefault();
    login(e.currentTarget[0].value, e.currentTarget[1].value);
    $("#log-in-form")[0].reset();
  });
}
function addLogoutSubmitEventListener(){
  $("#log-out").on("click", function(){
    logout();
  });
}

function hideAuthLinks(){
  $(".auth-user").css("display", "none");
}

function showAuthLinks(){
  $(".auth-user").css("display", "inline");
}

// alerts based on login
function addBadLoginAlert(message){
  alert(message || "Login attempt failed.");
}

// displays the overlay for the users songs
function loadUserSongsListener() {
  $(".list-songs").on("click", function() {
    console.log("load clicked");
    $("div ul li").remove();
    $(".page-overlay").css("display", "block");
    listUserSongs();
  })
}
