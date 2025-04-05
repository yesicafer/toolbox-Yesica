 
export function getAllLocators(){

 
    return {
      // Page navigation to sing up
      homePagesingup: '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(4) > a',
  
      // First form
      inputName: '#form > div > div > div:nth-child(3) > div > form > input[type=text]:nth-child(2)',
      inputEmail: '#form > div > div > div:nth-child(3) > div > form > input[type=email]:nth-child(3)',
      buttonform: '#form > div > div > div:nth-child(3) > div > form > button',
  
      // form
      selectGender: '#id_gender2',
      inputPassword: '#password',
      selectDay: '#days',
      selectMonth: '#months',
      selectYear: '#years',
      newsletter: '#newsletter',
      option: '#optin',
      inputNameForm: '#first_name',  
      inputLastName: '#last_name',   
      inputCompany: '#company',
      inputAddress: '#address1',
      inputAddresstwo: '#address2',
      country: '#country',
      state: '#state',
      city: '#city',
      zipCode: '#zipcode',
      celphone: '#mobile_number',
      btnCreateAccount: '#form > div > div > div > div.login-form > form >.btn-default',

      // Account created
      textCreated: '#form > div > div > .col-sm-offset-1 > h2 > b',
      btnContinue: '#form > div > div > div > .pull-right> a',
    };
  }