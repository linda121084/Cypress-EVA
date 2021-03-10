describe('My First Test', function() {
    it('Should be able to create a new Lesson', function() {
  
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
        
    cy.contains('span','Lesson').click({ force: true })
        .url().should('include', '/ehs/training/lesson/list')
        .wait(1000)

    //Add Lesson
    cy.get('.btn').contains('Add Lesson').click()
        .url().should('include', '/ehs/training/lesson/add')

        .get('input[formcontrolname=name]').type('Lesson 測試') // Lesson Name
        .wait(1000)
    
        .get('mat-select[formcontrolname=types').click() //Lesson Type
        .get('.cdk-overlay-pane').should('be.visible')
        .get('.mat-option').contains('span','Internal SOP').click({ force: true })
        .get('.cdk-overlay-backdrop').click({ force: true })
        .get('.cdk-overlay-pane').should('not.be.visible')

     
        .get('input[formcontrolname=prerequisites_input').type('人員') //Lesson Prerequisites 
        .get('.mat-autocomplete-panel').should('be.visible')
        .get('.mat-option').contains('span','職安衛').click({ force: true })
        //.get('.cdk-overlay-backdrop').click({ force: true })
        .get('.cdk-overlay-pane').should('not.be.visible')
        .wait(1000)

        .get('input').eq(2).click() //Company
        .type('eva')
        .get('.cdk-overlay-pane').contains('span','[EVAA] 長榮航空-空勤').click()

        .get('textarea[formcontrolname=content]').type('科目內容testing') //Lesson Content

        .get('input[formcontrolname=length').type('40') //Length (Hrs)   

        .get('input[formcontrolname=minGrade').type('70') //Minimum Grade

        .get('.btn').contains('Add').click()
        .url().should('include', '/ehs/training/lesson/list')

    //Search Lesson
    cy.get('input').eq(0).type('eva') //Company
        .get('.cdk-overlay-pane').contains('span','[EVAA] 長榮航空-空勤').click()
        .wait(1000)
        .get('input[formcontrolname=code').type('Lesson 測試')
        .get('.btn').contains('Search').click()
        .wait(2000)

    //Go to Scheduling Page （ More -> Schedule ）
    cy.get('.tableBtn').eq(0).click({ force: true })
        .get('.mat-menu-content')
        .get('.mat-menu-item').contains('Schedule').click()
        .url().should('include', '/ehs/training/class/add')
        .wait(1000)
        .get('input')

    // //Back to Lesson Page
    // cy.contains('span','Lesson').click({ force: true })
    //     .url().should('include', '/ehs/training/lesson/list')
    //     .wait(1000)

    //Delete Lesson
    cy.get('.tableBtn').eq(0).click({ force: true })
        .get('.mat-menu-content')
        .get('.mat-menu-item').contains('Delete').click()
        .wait(1000)
        .get('.btn').contains('Delete Lesson').click()
       
    })
  })