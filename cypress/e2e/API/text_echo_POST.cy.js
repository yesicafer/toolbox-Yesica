import { PAYLOAD, CODE } from '../../support/constants';

describe("API POST /echo ", () =>  
    {
      let textValue = '';
      before(() => {
        cy.fixture('provide_text').then((data) => {
          textValue = data.text;
        });
      });

    it("POST - status code should be 200", () => {

        cy.request(
            {
            method:'POST', 
            url:(PAYLOAD.url +'/echo?text='+textValue),        
            body:PAYLOAD.dataPath,
        })
        .then((res) => {             
               
        cy.expect(res.status).to.eq(CODE.code);
      });
    });

    it("POST - should return expected headers", () => {

      cy.request(
          {
          method:'POST', 
          url:(PAYLOAD.url +'/echo?text='+textValue),        
          body:PAYLOAD.dataPath,
      })
      .then((res) => {             
          
      cy.expect(res.headers, 'response headers').to.include({
          
        'access-control-allow-origin': 'https://echo-serv.tbxnet.com', 
        'cf-cache-status': 'DYNAMIC', 
        'content-type': 'application/json; charset=utf-8',         
        'server': 'cloudflare',          
        'vary': 'Origin, Accept-Encoding',     
        'server': 'cloudflare ',   
        'date': 'Fri, 04 Apr 2025 14:06:23 GMT ',   
      })

    });
  });

   it("POST - should respond in less than 3 seconds", () => {

     cy.request(
         {
         method:'POST', 
         url:(PAYLOAD.url +'/echo?text='+textValue),        
         body:PAYLOAD.dataPath,
     })
      .then((res) => {             
      cy.expect(res).to.have.property('duration').lessThan(3000);
    });
  });

  }) 
   

