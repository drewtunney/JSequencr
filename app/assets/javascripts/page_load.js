// DOM SETTUP

function settupDOM(){
<<<<<<< HEAD
  settupSequencer();
  triggerEventListeners();
  getSoundsFromServer();
=======
  listSoundChoices();
  triggerEventListeners();
>>>>>>> 697e016e9936462bbbb50f448eed87e9690cd932
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