describe('UbnJr Test', () => {
  it('Visit UbnJrWebSite and click element with XPath', () => {
    cy.visit('http://localhost:3000')
    cy.viewport(1280, 720)

    cy.xpath('/html/body/div/div/div[1]/div/div/ul/li[6]/button').click()
  
    cy.xpath('/html/body/div/div/div[1]/div[2]/div/div[2]/form/div[1]/input')
      .type('cemo');

    cy.xpath('/html/body/div/div/div[1]/div[2]/div/div[2]/form/div[2]/input')
    .type('akcadogan');

    cy.xpath('/html/body/div/div/div[1]/div[2]/div/div[2]/form/div[3]/input')
    .type('cemocemo2010@gmail.com')

    cy.xpath('/html/body/div/div/div[1]/div[2]/div/div[2]/form/div[4]/textarea')
    .type('OYLE SIKERLER')

    cy.xpath('//html/body/div/div/div[1]/div[2]/div/div[2]/form/div[5]/button').click()

    cy.contains('Bilgileriniz başarıyla gönderildi.').should('be.visible');
    cy.contains('Form gönderilirken bir hata oluştu.').should('not.exist');

  })
})

///html/body/div/div/div[3]/span[2]/span[2]