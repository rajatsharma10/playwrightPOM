class CreatenewCustomer{
    constructor(page) {
    this.page = page;
    this.click_new = page.locator("xpath=//a[contains(text(),'New Customer')]");
  }

  
    async newcustomerdetails(){
      
         return this.click_new.click();
          
        
       }
       
}
module.exports={CreatenewCustomer}
