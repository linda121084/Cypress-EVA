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
    
    //Class Scheduling Page
    cy.contains('span','Class Scheduling').click({ force: true })
        .url().should('include', '/ehs/training/class/list')
        .wait(1000)

    //Add Class
    cy.get('.btn').contains('Add Class').click()
        .url().should('include', '/ehs/training/class/add')
        .get('input').eq(0)
        .type('eva')
        .get('.cdk-overlay-pane').contains('span','空勤').click()
        .wait(2000)
        
        .get('input[formcontrolname=query_lesson]').type('Lesson') // Lesson
        .get('.cdk-overlay-pane').contains('span','Lesson 測試').click({force: true})  
        .get('input[formcontrolname=name]').type('Autotest 課程測試') //Class Name
        .get('mat-select[formcontrolname=instructor]').click() //Iinstructor
        .get('.cdk-overlay-pane').contains('span','Linda').click({force: true}) 
        .get('textarea').type('Test Comment Area ') //Comment
        
        .get('.btn').contains('Next').click()

    //Search Lesson
    cy.get('input').eq(1).click()
        .type('test123')
        .wait(1000)
        .get('.btn').contains('Search').click()
        .wait(2000)

    //Go to Scheduling Page
    cy.get('.tableBtn').eq(0).click({ force: true })
        .get('.mat-menu-content')
        .get('.mat-menu-item').contains('Schedule').click()
        .url().should('include', '/ehs/training/class/add')
        .wait(1000)

    //Back to Lesson Page
    cy.contains('span','Lesson').click({ force: true })
        .url().should('include', '/ehs/training/lesson/list')
        .wait(1000)

      //Delete Lesson
    cy.get('.tableBtn').eq(0).click({ force: true })
        .get('.mat-menu-content')
        .get('.mat-menu-item').contains('Delete').click()
        .wait(1000)
        .get('.btn').contains('Delete Lesson').click()
       
    })
  })