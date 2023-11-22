//@ts-check
class Baseclass{
    constructor(page) {
      this.page = page;
      this.UserName=page.locator("xpath=//input[@name='uid']");
      this.Password=page.locator("xpath=//input[@name='password']");
       
}

   /**
    * @param {string} name
    * @param {string} password
    */
   async login(name,password){
    await this.UserName.fill(name);
    await this.Password.fill(password);
    await this.page.locator("xpath=//input[@name='btnLogin']").click();
    
   }
   
  
}
export default{Baseclass}