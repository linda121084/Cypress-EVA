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

    //Instructor Page
    cy.contains('span','Instructor').click({ force: true })
        .url().should('include', '/ehs/training/instructor/list')
        .wait(1000)
        
    //Add Instructor ( Inactive , Full Time Employee)
    cy.get('.btn').contains('Add Instructor').click()
        .url().should('include', '/ehs/training/instructor/add')
        .get('.mat-radio-button [type="radio"]').eq(1).check({ force: true }).should('be.checked') //Status
        .get('.mat-radio-button [type="radio"]').eq(2).check({ force: true }).should('be.checked') //Instructor Type
        .wait(1000)
        .get('input').eq(4).type('陳') // Select Employee
        .get('.mat-autocomplete-panel').should('be.visible')
        .get('.mat-option').contains('span','柔安').click({ force: true })
        .get('.cdk-overlay-pane').should('not.be.visible')
        .wait(1000)
        .get('.btn').contains('Add').click()
        .url().should('include', '/ehs/training/instructor/list')
        .wait(1000)    

    //Add Instructor （ Active , External Training Institution ）
    cy.get('.btn').contains('Add Instructor').click()
        .url().should('include', '/ehs/training/instructor/add')
        .get('.mat-radio-button [type="radio"]').eq(0).check({ force: true }).should('be.checked') //Status
        .get('.mat-radio-button [type="radio"]').eq(3).check({ force: true }).should('be.checked') //Instructor Type
        .wait(1000)
        .get('input[formcontrolname=third_party_name]').type('Linda') //Instructor Name
        .get('input[formcontrolname=organization]').type('職訓局') //External Training Institution Name
        .get('input').eq(6).click() //Host Company
        .type('hd')
        .get('.cdk-overlay-pane').contains('span','[EVAA] 長榮航空-空勤 (空勤)').click() 
        .wait(1000)
        .get('.btn').contains('Add').click()
        .url().should('include', '/ehs/training/instructor/list')
        .wait(1000)

    //Search instructors
    cy.get('input').eq(0).click()
        .type('柔安')
        .wait(1000)
        .get('.btn').contains('Search').click()
        .wait(2000)


    // //Go to Scheduling Page
    // cy.get('.tableBtn').eq(0).click({ force: true })
    //     .get('.mat-menu-content')
    //     .get('.mat-menu-item').contains('Schedule').click()
    //     .url().should('include', '/V6/ehs/training/class/add')
    //     .wait(1000)

    // //Back to Lesson Page
    // cy.contains('span','Lesson').click({ force: true })
    //     .url().should('include', '/V6/ehs/training/lesson/list')
    //     .wait(1000)

    //Delete instructor
    cy.get('.tableBtn').eq(0).click({ force: true })
        .get('.mat-menu-content')
        .get('.mat-menu-item').contains('Delete').click()
        .wait(1000)
        .get('.btn').contains('Delete Instructor').click()
    
    cy.get('.btn').contains('Reset').click()
        .url().should('include', '/ehs/training/instructor/list')
    

       
    })
  })