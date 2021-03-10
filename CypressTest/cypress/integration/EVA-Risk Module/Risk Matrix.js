/// <reference types="Cypress" />
describe('Given a valid user & products are inserted in DB', () => {
    context('When I logged in as the user', () => {
      it('Then I should be log in successfully', () => {
        //cy.server()
        //cy.route('/prod').as('prodPage')

        cy.visit('http://13.231.180.144/V7/auth/login')

        cy.get('input').eq(0).type('admin')
            .get('input').eq(1).type('test')
            .get('.btn').click()

        cy.url().should('include', '/quantum/dashboard')

        cy.get('.kt-container').should('be.visible')
        cy.viewport(1280, 800)

        cy.contains('span','風險模組').click({ force: true })
            .url().should('include', '/ehs/risk/matrix/list')
            .wait(1000)
        
        cy.get('.btn').contains('Add').click()

        //Main Record
            .get('input').eq(0).type('Sample測試') //Risk Matrix Title
            //.get('mat-select[formcontrolname=assessmentTypes]').click({ force: true })//Assessment Type
            //.get('.cdk-overlay-pane').should('be.visible')
            //.get('.mat-option').contains('span','Hazard Identification and Risk Assessment').click()
            //.get('.cdk-overlay-backdrop').click({force:true})
            //.get('.cdk-overlay-pane').should('not.be.visible')

            .get('textarea[formcontrolname=description]').eq(0).type('Test') //Description
            
            .get('input').eq(1).type('5') //Likelihood
            .get('input').eq(2).type('常發生').get('.btn').eq(1).click()
            .get('input').eq(3).type('4')
            .get('input').eq(4).type('偶爾發生').get('.btn').eq(3).click()
            .get('input').eq(5).type('3')
            .get('input').eq(6).type('很少發生').get('.btn').eq(4).click()
            .get('input').eq(7).type('2')
            .get('input').eq(8).type('不大可能發生').get('.btn').eq(5).click()
            .get('input').eq(9).type('1')
            .get('input').eq(10).type('極不可能發生')

            .get('input').eq(11).type('A') //Severity
            .get('input').eq(12).type('災難的').get('.btn').eq(7).click()
            .get('input').eq(13).type('B')
            .get('input').eq(14).type('極嚴重').get('.btn').eq(9).click()
            .get('input').eq(15).type('C')
            .get('input').eq(16).type('嚴重').get('.btn').eq(10).click()
            .get('input').eq(17).type('D')
            .get('input').eq(18).type('輕微').get('.btn').eq(11).click()
            .get('input').eq(19).type('E')
            .get('input').eq(20).type('可忽略')

            .get('.btn').contains('Next').click()
        //RPN Setup
            .get('.mat-select').eq(1).click()
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span',' Low ').click()
            .get('textarea').eq(1).type('暫時不需採取風險降低措施，但須確保現有防護措施之有效性')
            //.get('.mat-radio-button').click()//指派
            cy.get('[type="radio"]').eq(0).check({force: true})
            
            
            .get('.btn').contains('新增風險等級').click()
            .get('.mat-select').eq(2).click()
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').eq(3).contains('span','Medium').click()
            .get('textarea').eq(2).type('需採取風險降低措施，並須確保現有防護措施之有效性')
            //.get('div.mat-slide-toggle-bar').eq(1).click()//指派
            .get('[type="radio"]').eq(2).check({force: true})
            .get('.btn').contains('新增風險等級').click()
            .get('.mat-select').eq(3).click()
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span',' Extreme ').click()
            .get('textarea').eq(3).type('需立即採取風險降低措施，在風險降低前不應開始或繼續作業')
            //.get('div.mat-slide-toggle-bar').eq(2).click()//指派

            .get('.mat-select').eq(4).click()
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Extreme').click()
            .get('.ng-star-inserted').contains('span','5A').click()
            .get('.ng-star-inserted').contains('span','5B').click()
            .get('.ng-star-inserted').contains('span','5C').click()
            .get('.ng-star-inserted').contains('span','4A').click()
            .get('.ng-star-inserted').contains('span','4B').click()
            .get('.ng-star-inserted').contains('span','3A').click()

            .get('.mat-select').eq(4).click()
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Medium').click()
            .get('.ng-star-inserted').contains('span','5D').click()
            .get('.ng-star-inserted').contains('span','5E').click()
            .get('.ng-star-inserted').contains('span','4C').click()
            .get('.ng-star-inserted').contains('span','4D').click()
            .get('.ng-star-inserted').contains('span','4E').click()
            .get('.ng-star-inserted').contains('span','3B').click()
            .get('.ng-star-inserted').contains('span','3C').click()
            .get('.ng-star-inserted').contains('span','3D').click()
            .get('.ng-star-inserted').contains('span','2A').click()
            .get('.ng-star-inserted').contains('span','2B').click()
            .get('.ng-star-inserted').contains('span','2C').click()
            .get('.ng-star-inserted').contains('span','1A').click()

            .get('.mat-select').eq(4).click()
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Low').click()
            .get('.ng-star-inserted').contains('span','3E').click()
            .get('.ng-star-inserted').contains('span','2D').click()
            .get('.ng-star-inserted').contains('span','2E').click()
            .get('.ng-star-inserted').contains('span','1B').click()
            .get('.ng-star-inserted').contains('span','1C').click()
            .get('.ng-star-inserted').contains('span','1D').click()
            .get('.ng-star-inserted').contains('span','1E').click()

            .get('.btn').contains('Save').click()
            .url().should('include', '/ehs/risk/matrix/list')

        //Edit
        //     .get('.mat-button').eq(0).click()
        //     .url().should('include', '/edit')
        //     .get('.btn').contains('清除重填')
        //     .get('.btn').contains('Cancel').click()
        //     .get('.btn').contains('Leave').click()
        //     .url().should('include', '/ehs/risk/matrix/list')

        // //Delete
        //     .get('.mat-button').eq(1).click()
        //     .get('.btn').contains('Delete Risk Matrix').click()
      })
    })
})