// DOM SETTUP

function settupDOM(){
  settupSequencer();
  triggerEventListeners();
  getSoundsFromServer();
  saver();
  
  songId = 0; //this means there is no song saved already
  listSoundChoices();

  JSequencr.currentUserId = parseInt(JSequencr.currentUserId) || 0;
  
  addSignUpSubmitEventListener();
  // updateSignUpForm();
  addLoginSubmitEventListener();
  addLogoutSubmitEventListener();
  updateLoginForm();
}