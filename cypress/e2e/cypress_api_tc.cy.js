it("GET API testing Using Cypress API Plugin", () => {
  cy.request("GET", "https://reqres.in/api/users?page=2").should((response) => {
    expect(response.status).to.eq(200);
    console.log(response.body.data[0]);
    expect(response.body.total_pages).to.eq(2);
    expect(response.body.data[0]).has.property("first_name", "Michael");
  });
});

it("POST API testing Using Cypress API Plugin", () => {
   cy.request("POST", "https://reqres.in/api/users", {
     name: "morpheus",
     job: "leader",
   }).should((response) => {
     expect(response.status).to.eq(201);
     console.log(response.body);
     expect(response.body).has.property("name", "morpheus");
   });
});

it("PUT API testing Using Flip Plugin", () => {
   cy.request("PUT", "https://reqres.in/api/users/2", {
     name: "QAAutomationLabs",
     job: "QA Automation Engg",
   }).should((response) => {
     expect(response.status).to.eq(200);
     expect(response.body).has.property("name", "QAAutomationLabs");
   });
});

it("DELETE API testing Using Cypress API Plugin", () => {
   cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
     expect(response.status).to.eq(204);
   });
});
