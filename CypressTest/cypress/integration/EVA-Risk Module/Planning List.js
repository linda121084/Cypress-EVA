/// <reference types="Cypress" />
describe('Given a valid user & products are inserted in DB', () => {
    context('When I logged in as the user', () => {
      it('Then I should be log in successfully', () => {
        //cy.server()
        //cy.route('/prod').as('prodPage')

        cy.visit('http://13.231.180.144/V7/auth/login')

        cy.get('input').eq(0).type('858142')
            .get('input').eq(1).type('858142')
            .get('.btn').click()

        cy.url().should('include', '/quantum/ehs/task-center/personal-task') //個人任務中心

        cy.get('.kt-container').should('be.visible')
        cy.viewport(1280, 800)

        //cy.get('quantum-language-selector').click() //切換成中文
           // .get('.kt-nav__link').contains('span','繁體中文').click()

        cy.contains('span','Risk Module').click({ force: true })
            .url().should('include', '/quantum/ehs/risk/record-conduct-job/record')
            .wait(1000)

        cy.contains('span','Job Task Setup').click({ force: true })
            .url().should('include', '/ehs/risk/job-task/list')
            .wait(1000)

        //Add
        cy.get('.btn').contains('Add').click()
            .url().should('include','/ehs/risk/planning/add')
            .wait(1000)
            
        //Main Record
            .get('input[formcontrolname=subject]').type('EVA-Planning測試') //Schedule Name

            .get('mat-select[formcontrolname=schedulingType]').click({force:true})//schedule Type
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Incident Scheduling').click()

            .get('mat-select[formcontrolname=assessmentType]').click() //Assessment Type
            .get('.mat-option').contains('span','Job Hazard Analysis').click()

            .get('textarea[formcontrolname=description]').type('長榮test排程') //Description

            .get('input').eq(2).click().type('空服') //評估部門
            .get('.cdk-overlay-pane').contains('span','[CBC] 空服人員').click()
            .wait(1000)
            .get('input').eq(3).click().type('李郁') //負責員工
            .get('.cdk-overlay-pane').contains('span','郁晨').click()
            .wait(1000)
            .get('.btn').eq(1).click() //+employee
            .get('input').eq(4).click().type('CGO') //評估部門
            .get('.cdk-overlay-pane').contains('span','貨運本部').click()
            .wait(1000)
            .get('input').eq(5).click().type('huang') //負責員工
            .get('.cdk-overlay-pane').contains('span','詩庭').click()
            .wait(1000)

            .get('.mat-icon-button').eq(1).click() // Start Date
            .get('.mat-calendar').should('be.visible').contains('5日').click()
            .get('.mat-radio-button [type="radio"]').eq(1).check({ force: true }).should('be.checked') //Recurrences
            .get('.btn').contains('Custom').click() 
            .get('.mat-dialog-container').should('be.visible')
            .get('input[formcontrolname=amount]').eq(2).clear().type('2') //Every
            .get('mat-select[formcontrolname=unit]').eq(2).click()
            .get('.cdk-overlay-pane').contains('span','Daily').click()
            .get('mat-select[formcontrolname=type]').eq(1).click() // On
            .get('.cdk-overlay-pane').contains('span','Hour').click()
            .get('input[formcontrolname=hour]').click().type('3')
            .get('.btn[type=submit]').contains('Save').click({ force: true })
            .get('mat-select[formcontrolname=type]').eq(0).click() //End Date
            .get('.cdk-overlay-pane').contains('span','After recurrences').click()
            .get('input[formcontrolname=endFrequency]').type(10)
            .get('input[formcontrolname=startTime]').click().type('12:10') // Start time
            .get('input[formcontrolname=amount]').eq(0).type('2') // Allotted time
            .get('mat-select[formcontrolname=unit]').eq(0).click()
            .get('.cdk-overlay-pane').contains('span','Hour').click()
            .get('input[formcontrolname=amount]').eq(1).type('4') //Remember before
            .get('mat-select[formcontrolname=unit]').eq(1).click()
            .get('.cdk-overlay-pane').contains('span','Day').click()

            .get('.btn').contains('Next').click()

        //Task
        cy.get('.btn').contains('Save').click()
            .wait(1000)
            .get('.breadcrumb-item-link').contains('Planning List').click()
            .url().should('include','/planning/list')
            .wait(1000)

            .get('.tableBtn').contains('span','more_vert').eq(0).click()
            .get('.cdk-overlay-pane').contains('span','View').click()
            .wait(1000)
            .get('.btn').contains('span','Edit').click()
            .get('.btn').contains('Next').click()
            .get('.btn').contains('Preview and Push To Live').click()
            .wait(1000)
            .get('.btn').eq(12).contains('Push To Live').click({ force: true })
            // .get('.breadcrumb-item').contains('Planning List').click()
            // .url().should('include','/planning/list')
            // .wait(1000)

            // .get('.tableBtn').contains('span','more_vert').eq(0).click()
            // .get('.cdk-overlay-pane').contains('span','Pause').click() //Pause
            // .get('.btn').contains('Pause').click()

            // .get('.tableBtn').eq('')
            
            //Search
            // .get('.mat-select[formcontrolname=status]').click()
            // .get('.cdk-overlay-pane').contains('span','Live').click()


            

            
        


        //Delete
        .get('.mat-icon-button').eq(1).click({ force: true })
        .get('.btn').contains('Delete Job Task Setup').click()
            

      })
    })
})