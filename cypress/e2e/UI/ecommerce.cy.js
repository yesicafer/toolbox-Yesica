import { getAllLocators } from '../../support/signup_locator';
import { URL } from '../../support/login_constants';
 
// get all location of sing up 
const allLocators = getAllLocators();

describe('Register a new user ', () => {
   it('open link', () => {
    cy.visit(URL)   
  }) 
  
  it('Singup', () => { 
    cy.visit(URL) // open the page 
    cy.get(allLocators.homePagesingup).click(); 
    cy.readFile('cypress/fixtures/signup_data.json').then(data => { 
       // pull out data
      const name = data.name;
      const email = data.email;
      cy.get(allLocators.inputName).type(name);
      cy.get(allLocators.inputEmail).type(email);    
    }) 
    cy.get(allLocators.buttonform).click(); 

    //new form 

    cy.get(allLocators.selectGender).click(); 
    cy.readFile('cypress/fixtures/form_signup.json').then(data => { 
      const password = data.password;     
      cy.get(allLocators.inputPassword).type(password);     
   }) 

   cy.readFile('cypress/fixtures/form_signup.json').then(data => { 
    const day = data.day;  
    const month = data.month; 
    const year = data.year;    
    cy.get(allLocators.selectDay).select(day); 
    cy.get(allLocators.selectMonth).select(month);  
    cy.get(allLocators.selectYear).select(year);      
 })    
    cy.get(allLocators.newsletter).click(); 
    cy.get(allLocators.option).click(); 
   
    cy.readFile('cypress/fixtures/form_signup.json').then(data => { 

    const first_name = data.first_name;    
    const last_name = data.last_name;     
    const company = data.company; 
    const addressone = data.address.addressone; 
    const addresstwo = data.address.addressone; 
    const country = data.address.country;
    const state = data.address.state;
    const city = data.address.city;
    const zipcode = data.address.zipcode;
    const celphone = data.company; 

      cy.get(allLocators.inputNameForm).type(first_name);
      cy.get(allLocators.inputLastName).type(last_name);
      cy.get(allLocators.inputCompany).type(company);
      cy.get(allLocators.inputAddress).type(addressone);
      cy.get(allLocators.inputAddresstwo).type(addresstwo);      
      cy.get(allLocators.country).select(country);
      cy.get(allLocators.state).type(state);
      cy.get(allLocators.city).type(city);
      cy.get(allLocators.zipCode).type(zipcode);
      cy.get(allLocators.celphone).type(celphone);
   }) 

    cy.get(allLocators.btnCreateAccount).click();
    cy.get(allLocators.textCreated).contains("Account Created!");
    cy.get(allLocators.btnContinue).click();
     
  })

})