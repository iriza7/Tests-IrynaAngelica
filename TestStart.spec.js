
describe('Test Assessment', () => {

    beforeEach(() => {
        cy.visit("ui-test-assessment-master/ui-test-assessment-master/employees.html")
    })

    it('Test UI part -Visibility of the table with columns (FirsName, Lastname, Title)', () => {

        //Test header of the table
        cy.get(".jqx-grid-column-header.jqx-widget-header.jqx-disableselect").contains("FirstName")
        cy.get(".jqx-grid-column-header.jqx-widget-header.jqx-disableselect").contains("LastName")
        cy.get(".jqx-grid-column-header.jqx-widget-header.jqx-disableselect").contains("Title")


    })

    it('Test checkboxes for options in the list should be clickable', () => {

        //Find 1st checkbox unchecked
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(0).click()

        //Test the checked checkbox
        cy.get(".jqx-tree-grid-checkbox-tick.jqx-checkbox-check-checked")
            .eq(0)

    })


    it('Categories of the names should be open after click', () => {
        //Find the collapsed option "Steven"
        cy.get(".jqx-tree-grid-collapse-button.jqx-grid-group-collapse.jqx-icon-arrow-right")
            .click()

        // 3 options should be visible now
        cy.get(".jqx-tree-grid-title.jqx-grid-cell-wrap").contains("Michael")
        cy.get(".jqx-tree-grid-title.jqx-grid-cell-wrap").contains("Robert")
        cy.get(".jqx-tree-grid-title.jqx-grid-cell-wrap").contains("Anne")


    })

    it('"View Select data" button should show the data of the selected options', () => {

        // Check all options
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(0).click()
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(1).click()
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(2).click()
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(3).click()
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(4).click()
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(5).click()
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(6).click()
        cy.get(".jqx-tree-grid-checkbox.jqx-tree-grid-indent.jqx-checkbox-default.jqx-fill-state-normal.jqx-rc-all")
            .eq(7).click()


        //Click "View Select data" button 
        cy.get("#btn").contains("View selected data").click()

        //
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Andrew is from Tacoma")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Nancy is from Seattle")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Janet is from Kirkland")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Margaret is from Redmond")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Steven is from London")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Michael is from London")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Robert is from London")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Anne is from London")
        cy.get(".jqx-listitem-element .jqx-listitem-state-normal.jqx-item.jqx-rc-all").contains("Laura is from Seattle")


    })



})
