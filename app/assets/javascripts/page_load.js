// DOM SETTUP

function settupDOM(){
  settupSequencer();
  triggerEventListeners();

  selectSoundOfRow();
  getSoundsFromServer();
  saver()
  songId = 0; //this means there is no song saved already

  listSoundChoices();
}