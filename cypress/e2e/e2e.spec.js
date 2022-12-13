describe('Rooms API test', () => {
    it('makes a GET request to the /rooms endpoint', () => {
      cy.visit('http://localhost:8002/');
      cy.request('GET', 'http://localhost:8080/rooms')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('rooms');
          expect(response.body.rooms).to.be.an('array');
          expect(response.body.rooms[0]).to.have.property('roomType');
          expect(response.body.rooms[0]).to.have.property('id');
        });
    });
  });