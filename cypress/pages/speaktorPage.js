class speaktorPage {
    elements = {
        signInWithEmail: () => cy.xpath("//button[normalize-space()='Sign In with E-mail']"),
        enterEmail: () => cy.get('.mb-0 > .form-control'),
        enterPassword: () => cy.get('.mb-3 > .form-control'),
        signInButton: () => cy.get('.sign-form > .btn'),
        closeButton: () => cy.xpath("//*[@class='btn-close']"),
        sideMenu: () => cy.xpath("//div[@id='sidebar-menu-open']"),
        workSpace: () => cy.xpath("//a[normalize-space()='Workspaces']"),
        textReader: () => cy.xpath("(//a[normalize-space()='Text Reader'])[1]"),
        fileInput: () => cy.xpath("//p[contains(text(),'Drop a File (PDF, Word, Txt, etc...) Here or Brows')]"),
        createWSButton: () => cy.xpath("//div[@class='row h-100']//div[1]//div[1]//div[1]//img[1]"),
        WSNameInput: () => cy.xpath("//div[@class='form-group me-3']//input[@placeholder='Enter Workspace name']"),
        createWSButtonDialog: () => cy.xpath("//button[@class='btn theme-btn mt-3']"),
        uploadingLoader: () =>  cy.get('.loading-loader2'),
        processing: () => cy.xpath("//tbody/tr[1]/td[3]/span[1]"),
        playButton : () => cy.xpath("//*[@class='play-theme-round pointer']"),
        pauseButton : () => cy.xpath("//*[@class='play-theme-round pointer']"),
        fileName : () =>  cy.get(':nth-child(1) > .pointer > a > .dark-color'),
        voice : () => cy.xpath("//div[@class='voice-selection selectedVoice']//div[@class='voice-content-div']"),
        settingIcon : () => cy.xpath("//div[@class='btn theme-btn rounded-btn min-width-initial ms-2 me-0']"),
        autoScroll : () => cy.xpath("(//*[@class='btn btn-toggle active'])[2]"),
        autoScrollOff : () => cy.xpath("(//*[@class='btn btn-toggle '])[1]"),
        openWS : () => cy.xpath("(//td[@class='w-100 dark-color regular pointer'])[1]"),
        createFolderButton : () => cy.xpath("//button[@class='btn theme-btn']"),
        inputFolder : () => cy.xpath("//input[@placeholder='Enter folder name']"),
        fileItem : () => cy.xpath("(//*[@class='dark-color regular filename'])[1]"),
        myAccount: () => cy.xpath("//a[normalize-space()='My Account']"),
        logoutButton: () => cy.xpath("//div[@class='logout-icon']//img[@alt='img']"),
        signOutButton: () => cy.xpath("//button[@class='btn theme-btn red-bg mt-3']")
    }
    clickOnSignInButton() {
        this.elements.signInWithEmail().should('be.enabled');
        this.elements.signInWithEmail().click({ force: true });
    }
    enterUserEmail() {
        this.elements.enterEmail().click({ force: true });
        this.elements.enterEmail().type('nidamaryum4@gmail.com');
    }
    enterUserPassword() {
        this.elements.enterPassword().click({ force: true });
        this.elements.enterPassword().type('speaktor');
    }
    clickLogin() {
        this.elements.signInButton().click({ force: true })
    }
    clickCloseIcon() {
        this.elements.closeButton().click({ force: true })
    }
    clickSideMenu() {
        this.elements.sideMenu().click({ force: true })
    }
    clickWorkSpace() {
        this.elements.workSpace().click({ force: true })
    }
    clickTextReader() {
        cy.visit('https://app.speaktor.com/uploader')
    }
    attachFile() {
        cy.wait(5000)
        cy.get(':nth-child(4) > .card', { timeout: 60000 }).should('exist').click({ force:true })
        cy.wait(2000);
        const file = 'fileUpload/file.jpeg';
        cy.get('input[type="file"]').attachFile(file);
    }

    verifySpeechTransition(){
        cy.wait(5000)
       this.elements.uploadingLoader().should('not.exist')
    }
    selectLanguage(){
        cy.wait(5000)
        this.elements.uploadingLoader().should('not.exist')
        this.elements.fileName({timeout:5000}).should('be.visible').click({force:true})
        this.elements.voice().click({force:true})
    }

    navigateToAudioPlayer(){
        cy.wait(20000)
        this.elements.fileItem().click({force:true});
    }
    clickPlayButton(){
        cy.wait(2000)
        this.elements.playButton().click({force:true});
        this.elements.pauseButton().should('exist');
    }
    clickPauseButton(){
        cy.wait(2000)
        this.elements.pauseButton().click({force:true});
        this.elements.playButton().should('exist')
    }
    clickSetting(){
        this.elements.settingIcon().click({force:true})
    }
    verifyAutoScroll(){
        this.elements.autoScroll().click({force:true})
        this.elements.autoScroll().should('not.exist')
        this.elements.autoScrollOff().click({force:true})
        this.elements.autoScrollOff().should('not.exist')
    }

    clickCreateWS() {
        this.elements.createWSButton().click({force:true })
    }
    enterWSName() {
        this.elements.WSNameInput().scrollIntoView().should('be.visible').click({force:true}).type('My Test Space');
    }
    clickCreate() {
        this.elements.createWSButtonDialog().click({force:true })
    }
    openWS(){
        this.elements.openWS({timeout:2000}).click({force:true})
    }
    clickCreateFolder(){
        this.elements.createFolderButton().click({force:true})
    }
    enterFolderName(){
        this.elements.inputFolder().type("Test Folder")
    }
    clickCreateFolderButton(){
        this.elements.createFolderButton().click({force:true})
    }
    logout() {
        this.elements.myAccount().click()
        this.elements.logoutButton().click()
        this.elements.signOutButton().click()
    }
}

export default speaktorPage