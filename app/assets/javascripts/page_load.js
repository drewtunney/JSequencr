// DOM SETTUP

function settupDOM(){
  settupSequencer();
  triggerEventListeners();
  listSoundChoices();
  saver();
  songId = 0; //this means there is no song saved already
}