describe("API get text", () =>  
    {
    const url = 'https://echo-serv.tbxnet.com/v1';
    const dataPath = "cypress/fixtures/provide_text.json";
   

    it("GET-test -code 200 is ok", () => {
       
        // start request
        cy.request(
            {
            method:'GET', 
            url:(url +"/echo?text=$dataPath.text$"),        
            body:dataPath,
        })
        .then((res) => {    
  
          cy.expect(res.status).to.eq(200);

        });
      });
   
      it("GET-test -check response headers", () => {
        cy.request(
          {
          method:'GET', 
          url:(url +"/echo?text=$dataPath.text$"),        
          body:dataPath,
      })
      .then((res) => {  
          cy.expect(res.headers, 'response headers').to.include({
            
            'alt-svc': 'h3=":443"; ma=86400', 
            'cf-cache-status': 'DYNAMIC', 
           // 'cf-ray': '92b287b49dcda533-MIA', 
           // 'content-length': '17', 
            'etag': 'W/"11-Md/HoWaeVDw2c6uKWAY7mImm7mQ"', 
            'priority': 'u=1,i', 
            'content-type': 'application/json; charset=utf-8',         
            'server': 'cloudflare',          
            'server-timing': 'cfExtPri',  
            'vary': 'Origin, Accept-Encoding',      

          })         
          cy.expect(res).to.have.property('duration').lessThan(3000);    
        })
      });
  
  

    it("GET-test -check duration less 3000", () => {
      cy.request(
        {
        method:'GET', 
        url:(url +"/echo?text=$dataPath.text$"),        
        body:dataPath,
       })
       .then((res) => {            
          cy.expect(res).to.have.property('duration').lessThan(3000);    
      });
     });

  }) 