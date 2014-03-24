// DOM SETTUP

function settupDOM(){
  listSoundChoices();
  triggerEventListeners();
  saver();
  songId = 0; //this means there is no song saved already
  var currentUserId = 0;

  // currentUserId = 0;
  submitUpdatesLogin();
  loggedIn();
  updateLoginForm();

  listSoundChoices();
  loginSubmit();
  logoutSubmit();
}