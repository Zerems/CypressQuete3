Cypress.Commands.add('tasteDiveReq', (query, limit, info) => {
    cy.request({
        url: 'https://tastedive.com/api/similar',
        qs: {
            q: query,
            limit: limit,
            k : '375523-postman-G4KCQ8OE',
            info: info,
        }
    }) 
})
