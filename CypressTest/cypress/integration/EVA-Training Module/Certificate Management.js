describe('My First Test', function() {
    it('Gets, types and asserts', function() {

    //Log In Page
     cy.visit('http://13.231.180.144/V7/auth/login')

     cy.get('input').eq(0).type('admin')
         .get('input').eq(1).type('test')
         .get('.btn').click()
 
      //Confirm Windows size 
     cy.get('.kt-container').should('be.visible')
     cy.viewport(1280, 800)
 
     cy.contains('span','Training Module').click({ force: true })
         .url().should('include', '/ehs/training/calendar/training-calendar')
         .wait(1000)

    
    //Certificate Management Page
    cy.get('.kt-menu__submenu').contains('span','Certificate Management').click({ force: true })
        .url().should('include', '/ehs/training/certificate/list')
        .wait(1000)

     //Add Certificate
     cy.get('.btn').contains('Add Certificate').click()
     .url().should('include', '/ehs/training/certificate/add')

     .get('input').eq(0).type('陳') //Employee
     .get('.mat-autocomplete-panel').should('be.visible')
     .get('.mat-option').contains('span','力維').click({ force: true })
     .get('.cdk-overlay-pane').should('not.be.visible')

     .get('.btn').contains('Add a Category').click() //Certificate Category
     //Popup
     .get('input[formcontrolname=code]').type('證書類別 Cypress Test')//Category Name
     .get('input[formcontrolname=query_company]').type('地勤')//Company
     .get('.cdk-overlay-pane').should('be.visible')
     .get('.mat-option').contains('span','[OMD/GH1] 運航管理部 地勤管理一課').click({ force: true })
     .get('input[formcontrolname=reminderBeforeExpiration]').clear().type('6')//Reminder Before Expiration Date
     .get('mat-select[formcontrolname=periodUnit]').click()
     .get('.cdk-overlay-pane').contains('span','Day').click()
     
     .get('.mat-checkbox [type="checkbox"]').check({ force: true }) //Reminder Recipient
     .get('.mat-chip-input').click()
     .type('chen')
     .get('.mat-autocomplete-panel').contains('Jessica Chen').click()
     .get('.mat-chip-input').click()
     .type('李')
     .get('.mat-autocomplete-panel').contains('賢').click() 
    
     .get('input[formcontrolname=certificationName]').type('證書 TEST') //Certification Name
     .get('input[formcontrolname=certificationNumber]').type('Cypress-1830') //Certification No
     .get('input[formcontrolname=licenseIssuingAgency]').type('ISO認證機構') // License Issuing Agency
     .get('input[formcontrolname=accreditationDate]').click() //Accreditation Date   
     .get('input[formcontrolname=renewalPeriod]').clear().type('3')//Period of Validity
     .get('mat-select[formcontrolname=renewalPeriodUnit]').click()
     .get('.cdk-overlay-pane').contains('span','Month').click()
     //Renewal Period

    //Manage Category 
    cy.get('.btn').contains('Manage Category').click()
        .wait(1000)
        .get('.btn').contains('Add Category').click()
        .wait(1000)
        .get('.cdk-overlay-pane')
        .should('be.visible')
        .wait(1000)

        .get('input[formcontrolname=code]').type('Category 測試') //Category Name 
        .get('input[formcontrolname=query_company]').type('CCD') //Company
        .get('.cdk-overlay-pane').contains('span','空服本部 (空勤)').click({force: true}) 
        .get('input[formcontrolname=reminderBeforeExpiration]').type('3') //Reminder Before Expiration Date
        .get('mat-select[formcontrolname=periodUnit]').click({force: true})
        .get('.cdk-overlay-pane').contains('Day').click({force: true})
        // .get('.mat-checkbox[formcontrolname=remindEmployee]').check()//Reminder Recipient
        // .get('.mat-checkbox[formcontrolname=remindSupervisor]').click({force: true})
        // .get('.mat-checkbox[formcontrolname=remindFacilityContact]').click({force: true})

        .get('.mat-checkbox [type="checkbox"]').check({ force: true }) //Reminder Recipient
        .get('.mat-chip-input').click()
        .type('chen')
        .get('.mat-autocomplete-panel').contains('Natasha Chen').click()
        .get('.mat-chip-input').click()
        .type('李')
        .get('.mat-autocomplete-panel').contains('素').click() 

        .get('.btn').eq(6).contains('Add').click({force:true}) //Add Category

    cy.url().should('include','/ehs/training/certificate-category/list')

    //Add Certificate
    cy.get('.btn').contains('Add Certificate').click()
        .url().should('include', '/ehs/training/certificate/add')

        .get('input[formcontrolname=certificationName]').type('證書 TEST') //Certification Name
        .get('input[formcontrolname=certificationNumber]').type('NO.1830') //Certification Number
        .get('input[formcontrolname=licenseIssuingAgency]').type('ISO認證機構') 
        .get('input[formcontrolname=accreditationDate]').click() //AccreditationDate
        .get('')

   

        
        // .get('.btn').eq(4).should('not.be.disabled').click({force:true})
        // //.get('.cdk-overlay-pane').should('not.be.visible')

        // .get('mat-input-element').eq(1).should('contain', '環安衛')

        // .get('input').eq(2)
        // .type('EHS Certificate')
        // .wait(1000)


        // .get('input').eq(2)
        // .type('EHS Certificate')
        // .wait(1000)

        // .get('input').eq(3)
        // .type('NO.a1839EHS')
        // .wait(1000)

    // //Manage Category
    // cy.get('.btn').eq(0).click()
    //     .url().should('include', '/V6/ehs/training/certificate-category/list')
    
    //Add Category
    // cy.get('.btn').eq(0).click()
        
    //     .get('#mat-input-17').type('EHS Certificate')
    //     //.get('.mat-form-field-flex').eq(0)
    //     //.get('input [id="mat-input-77"]').click({ force: true })
    //     .type('EHS Certificate')
    //     .wait(1000)
        
        //.get('.mat-form-field-flex').eq(0).click()
       // .contains('span','OSHA Training').click()
       // .should('have.value','OSHA Training')
    //     .get('.mat-form-field-flex').eq(0).click({ force: true })
    //     .type('安全')
    //     .get('.cdk-overlay-pane').contains('span','[OSD] 職業安全衛生管理室').click()

 
       
    })
  })