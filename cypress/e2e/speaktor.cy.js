import speaktorPage from "../pages/speaktorPage";
describe('template spec', () => {
  const spktrPage = new speaktorPage();

  beforeEach(function() {
    cy.visit('https://app.speaktor.com/');
    // spktrPage.clickOnSignInButton();
    // spktrPage.enterUserEmail();
    // spktrPage.enterUserPassword();
    // spktrPage.clickLogin();
    // spktrPage.clickCloseIcon()
    cy.wait(2000)
  })
  
// //passed
//   it('TC_002-010', () => {
//     spktrPage.clickTextReader();
//     spktrPage.attachFile();
//     spktrPage.selectLanguage();
//   })

//   //passed
//    it('TC_003-002', () =>{
//     spktrPage.clickTextReader();
//     spktrPage.attachFile();
//     spktrPage.navigateToAudioPlayer();
//     spktrPage.clickPauseButton();
//     spktrPage.clickPlayButton();
    
//    })

//   //passed
//   it('TC_002-014', () => {
//     spktrPage.clickTextReader();
//     spktrPage.attachFile();
//     spktrPage.verifySpeechTransition();
//   })
// //passed
//   it('TC_004-003', () =>{
//     spktrPage.clickTextReader();
//     spktrPage.attachFile()
//     spktrPage.navigateToAudioPlayer()
//     spktrPage.clickSetting()
//     spktrPage.verifyAutoScroll()
//   })


  it('TC_007-013', () =>{
    spktrPage.clickSideMenu();
    spktrPage.clickWorkSpace();
    spktrPage.clickCreateWS();
    //may be failing at this point due to this error, ask your developer to make the input field interactable
    spktrPage.enterWSName();
    spktrPage.clickCreate();
    spktrPage.openWS();
    spktrPage.clickCreateFolder();
    spktrPage.enterFolderName();
    spktrPage.clickCreateFolderButton();
  })

})