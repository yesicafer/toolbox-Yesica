describe("API POST text", () =>  
    {
    const url = 'https://echo-serv.tbxnet.com/v1';
    const dataPath = "cypress/fixtures/pos_code.json";
   

    it("POST-test -code 200 is ok", () => {

        cy.request(
            {
            method:'POST', 
            url:(url +"/echo?text=$dataPath.text$"),        
            body:dataPath,
        })
        .then((res) => {             
               
        cy.expect(res.status).to.eq(200);
      });
    });

    it("POST-test -headers", () => {

      cy.request(
          {
          method:'POST', 
          url:(url +"/echo?text=$dataPath.text$"),        
          body:dataPath,
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

   it("POST-test -duration", () => {

     cy.request(
         {
         method:'POST', 
         url:(url +"/echo?text=$dataPath.text$"),        
         body:dataPath,
     })
      .then((res) => {             
      cy.expect(res).to.have.property('duration').lessThan(3000);
    });
  });

  }) 
   

