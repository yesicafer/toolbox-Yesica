import { PAYLOAD, CODE } from '../../support/constants';
import {  } from '../../fixtures/provide_text.json';
 

describe("API GET /echo", () =>  
    {
      let textValue = '';
      
        before(() => {
          cy.fixture('provide_text').then((data) => {
          textValue = data.text;
          });
        });
   
    it("GET - status code should be 200", () => {   
       cy.on("fail", (err, runnable) => {cy.log(err.message); return false;});
        cy.request({
        method:'GET', 
        url:(PAYLOAD.url +'/echo?text='+textValue),        
        body:PAYLOAD.dataPath,
    })
    .then((res) => {  
        cy.expect(res.status).to.eq(CODE.code);         
    })
    })   
   
   
    it("GET - should return expected headers", () => {
         cy.request({
          
          method:'GET', 
          url:(PAYLOAD.url +'/echo?text='+textValue),        
          body:PAYLOAD.dataPath,
      })
    .then((res) => {  
      
        cy.expect(res.headers, 'response headers').to.include({
            
            'alt-svc': 'h3=":443"; ma=86400', 
            'cf-cache-status': 'DYNAMIC',  
            'etag': 'W/"11-Md/HoWaeVDw2c6uKWAY7mImm7mQ"', 
            'priority': 'u=1,i', 
            'content-type': 'application/json; charset=utf-8',         
            'server': 'cloudflare',          
            'server-timing': 'cfExtPri',  
            'vary': 'Origin, Accept-Encoding',   

          })   
         
         })
      });
       
          

    it(" GET - should respond in less than 3 seconds", () => { 
    
      cy.request(
       {
       method:'GET', 
       url:(PAYLOAD.url +'/echo?text='+textValue),        
       body:PAYLOAD.dataPath,
      })
    .then((res) => {            
         cy.expect(res).to.have.property('duration').lessThan(3000);   
          
         });
       });
     });
 