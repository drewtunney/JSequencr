// DOM SETTUP

function settupDOM(){
  //listSoundChoices();
  saver();
  console.log("settupDOM was called");
  
  songId = 0; //this means there is no song saved already
  JSequencr.currentUserId = parseInt(JSequencr.currentUserId) || 0;
  
  addSignUpSubmitEventListener();
  addLoginSubmitEventListener();
  addLogoutSubmitEventListener();
  updateLoginForm();
  loadUserSongsListener();
}