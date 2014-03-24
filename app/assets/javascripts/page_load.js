// DOM SETTUP

function settupDOM(){

  settupSequencer();
  triggerEventListeners();
  selectSoundOfRow();
  getSoundsFromServer();
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