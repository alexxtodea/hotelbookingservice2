describe('API tests', () => {
  it('makes a GET request to the /rooms endpoint', () => {
    cy.visit('http://localhost:8080/rooms');
    cy.request('GET', 'http://localhost:8002/rooms/getAll')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.property('roomType');
        expect(response.body[0]).to.have.property('bedAmount');
      });
  });

  it('makes a GET request to the /bookings endpoint', () => {
    cy.visit('http://localhost:8080/bookings');
    cy.request('GET', 'http://localhost:8002/booking/getAll')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body[0]).to.have.property('timeOfArrival');
        expect(response.body[0]).to.have.property('timeOfDeparture');
        expect(response.body[0]).to.have.property('bookerFullName');
        expect(response.body[0]).to.have.property('bookerEmail');
        expect(response.body[0]).to.have.property('id');
      });
  });

  describe("Post Method", function(){
    it("Scenario 3", function(){
      cy.visit('http://localhost:8080/rooms/add');
       cy.request('POST', 'http://localhost:8002/rooms/add', {
          roomType: 'Room',
          description: 'blablablabla bububu',
          roomNumber: '2',
          price: '230',
       })
    })
  });
});