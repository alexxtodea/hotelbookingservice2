// it('makes a POST', () => {
//   describe('Add Room', () => {
//     it('should add a new room', () => {
//       cy.visit('http://localhost:8080/rooms/add');
  
//       // Fill out the form to add a new room
//       cy.get('input[rooomType="roomType"]').type('My New Room');
//       cy.get('input[description="description"]').type('This is my new room.');
//       cy.get('input[roomNumber="roomNumber"]').type('20');
//       cy.get('input[price="price"]').type('400');
//       cy.get('button[type="submit"]').click();
  
//       // Send a JSON request to the /rooms/add endpoint
//       cy.request('http://localhost:8002/rooms/add')
//         .its('body')
//         .should('deep.equal', {
//           success: true,
//           room: {
//             name: 'My New Room',
//             description: 'This is my new room.',
//           }
//         });
//     });
//   });   
  
// });

