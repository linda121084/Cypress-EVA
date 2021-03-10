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
            .url().should('include','/ehs/risk/job-task/add')
            .wait(1000)

        //Main Record
        cy.get('input').eq(0).type('貴賓接待服務作業') //Task Name
            .get('mat-select[formcontrolname=assessmentType]').click({force:true})//Assessment Type
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','TW OSHA Job Hazard Analysis').click()
            .get('input').eq(1).click().type('機場') //Corporate Structure
            .get('.cdk-overlay-pane').contains('span','[APD] 機場本部').click()
            .wait(1000)
            .get('.mat-select').eq(1).click() //Job Task Type
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','機艙').click()

            .get('mat-select[formcontrolname=subtype]').click() //Job Task Subtype
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Inspection').click()

            .get('mat-select[formcontrolname=location]').click() //Job Task Location
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','桃園機場').click()
            .get('.mat-option').contains('span','外部場所').click()
            .get('.cdk-overlay-backdrop').click({ force: true })
            .get('.cdk-overlay-pane').should('not.be.visible')

            
        cy.get('mat-select[formcontrolname=serviceLifeCycle]').click() //Service Life Cycle
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Design').click()
            .get('.cdk-overlay-backdrop').click({ force: true })
            .get('.cdk-overlay-pane').should('not.be.visible')

            .get('.mat-radio-button [type="radio"]').eq(1).check({ force: true }).should('be.checked') //Working Condition
            .get('mat-select[formcontrolname=staffType]').click() //Staff Type
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Employee').click()
            .get('.cdk-overlay-backdrop').click({ force: true })
            .get('.cdk-overlay-pane').should('not.be.visible')

            .get('textarea[formcontrolname=content]').type('操作時請小心') //Operational Wrok Conent

            .get('.btn').contains('Next').click()

        //Add Job Task Hazard
        cy.get('.btn').contains('Add Job Task Hazard').click()
            .get('mat-select').eq(6).click({ force: true }) //Hazard Type
            .get('.mat-option').contains('span','異常工作負荷').click()

            .get('textarea[formcontrolname=hazardSituationalDescription]').type('12345') //Situational Description

            .get('mat-select[formcontrolname=jobTaskCycle]').click({ force: true }) //Job Task Cycle
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Monthly').click()
            
            .get('mat-select').eq(8).click({ force: true }) //Job Task Environment
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','海關區').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            
            .get('mat-select').eq(9).click({ force: true }) //Machine, Device or Tool
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','計程車').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select').eq(10).click({ force: true }) //Energy / Material / Substance / Chemical Material
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','酒精').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select').eq(11).click({ force: true })//qualification
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','機坪駕照').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select').eq(12).click({ force: true })//Engineering Control
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','扶手').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            
            .get('mat-select').eq(13).click({ force: true })//Management Control
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','危害告知').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            
            .get('mat-select').eq(14).click({ force: true })//Personal Protective Equipment
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','安全帽').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            
            .get('mat-select[formcontrolname=likelihood]').click({ force: true }) //Likelihood
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','4').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select[formcontrolname=severity]').click({ force: true }) // //Severity
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','C').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            .get('.btn').eq(9).contains('Save').click({ force: true })
            
            .get('.btn').contains('Publish').click()
            //.get('.btn').contains('Back To List').click()
            //.url().should('include', '/ehs/risk/job-task/list')

         //Search
         cy.get('input').eq(0).click().type('機場') //Corporate Structure
            .get('.cdk-overlay-pane').contains('span','[APD] 機場本部').click()
            .get('.mat-select').eq(0).click()
            .get('mat-select[formcontrolname=type]').click({ force: true }) //Type
            .get('.mat-option').contains('span','機艙作業').click()
            .get('mat-select[formcontrolname=riskRating]').click({ force: true }) //Risk Level
            .get('.mat-option').contains('span','Medium').click()
            .get('mat-select[formcontrolname=hazardType]').click()//hazard Type
            .get('.mat-option').contains('span','異常工作負荷').click()
            .get('input[formcontrolname=name]').type('貴賓接待服務作業')
              
            //Expand Advance Search
            .get('.col-12').contains('Expand Advance Search').click()
            .get('mat-select[formcontrolname=jobTaskLocation]').click()//jobTaskLocation
            .get('.mat-option').contains('span','桃園機場').click()
            .get('mat-select[formcontrolname=jobTaskServiceLifeCycle]').click()//ServiceLifeCycle
            .get('.mat-option').contains('span','Design').click()
            .get('mat-select[formcontrolname=jobTaskCondition]').click()//WorkingCondition
            .get('.mat-option').contains('span','Non routine conditions').click()
            .get('mat-select[formcontrolname=jobTaskStaffType]').click()//Staff Type
            .get('.mat-option').contains('span','Employee').click()
            .get('mat-select[formcontrolname=jobTaskEnvironment]').click()//jobTaskEnvironment
            .get('.mat-option').contains('span','海關區').click()
            .get('input[formcontrolname=content]').type('操作時請小心')//Operational Work Content

            .get('.btn').contains('Search').click()
            .wait(1000)

            
        //Edit
            .get('.mat-icon-button').eq(0).click({ force: true })
            .url().should('include','/edit')
            .wait(1000)
            
            .get('input').eq(0).clear().type('EVA-Sample測試-編輯') //Task Name
            .get('mat-select[formcontrolname=serviceLifeCycle]').click() //Service Life Cycle
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Design').click()
            .get('.mat-option').contains('span','Assembling').click()
            .get('.cdk-overlay-backdrop').click({ force: true })
            .get('.cdk-overlay-pane').should('not.be.visible')
            .get('mat-select[formcontrolname=staffType]').click() //Staff Type
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Visitor').click()
            .get('.mat-option').contains('span','Outsourcer').click()
            .get('.cdk-overlay-backdrop').click({ force: true })
            .get('.cdk-overlay-pane').should('not.be.visible')

            .get('.mat-horizontal-stepper-header').eq(1).click()

            //Add Job Task Hazard
            .get('.btn').contains('Add Job Task Hazard').click()
            .get('mat-select[formcontrolname=hazardType]').click({ force: true }) //Hazard Type
            .get('.mat-option').contains('span','環保事件').click()

            .get('textarea[formcontrolname=hazardSituationalDescription]').type('abc0123') //Situational Description

            .get('mat-select[formcontrolname=jobTaskCycle]').click({ force: true }) //Job Task Cycle
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','Occasionally').click()
            
            .get('mat-select').eq(7).click({ force: true }) //Job Task Environment
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','檔案室').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            
            .get('mat-select').eq(8).click({ force: true }) //Machine, Device or Tool
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','筆電').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select').eq(9).click({ force: true }) //Energy / Material / Substance / Chemical Material
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','酒精').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select').eq(10).click({ force: true })//qualification
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','機坪駕照').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select').eq(11).click({ force: true })//Engineering Control
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','扶手').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            
            .get('mat-select').eq(12).click({ force: true })//Management Control
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','危害告知').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            
            .get('mat-select').eq(13).click({ force: true })//Personal Protective Equipment
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','安全帽').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            
            .get('mat-select[formcontrolname=likelihood]').click({ force: true }) //Likelihood
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','A').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })

            .get('mat-select[formcontrolname=severity]').click({ force: true }) // //Severity
            .get('.cdk-overlay-pane').should('be.visible')
            .get('.mat-option').contains('span','2').click()
            .get('.cdk-overlay-backdrop').eq(1).click({ force: true })
            .get('.btn').eq(11).contains('Save').click({ force: true })
        
            .get('.btn').contains(' Save and Leave ').click()
            .url().should('include', '/ehs/risk/job-task/list')
            .wait(1000)

        // //View History
        //     .get('.mat-icon-button').eq(0).click({ force: true })
        //     .url().should('include','/edit')
        //     .wait(1000)

        //     .get('.btn').contains('View History').click()
        //     .url().should('include','/history')
        //     .get('.breadcrumb-item').contains('Return to Edit Job Task Setup').click()
        //     .url().should('include','/edit')
        //     .get('.breadcrumb-item').contains('Job Task Setup').click()
        //     .url().should('include','/job-task/list')  
        //     .wait(1000)

        //Delete
        .get('.mat-icon-button').eq(1).click({ force: true })
        .get('.btn').contains('Delete Job Task Setup').click()
            

      })
    })
})