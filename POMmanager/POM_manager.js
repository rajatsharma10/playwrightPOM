const {Baseclass} = require('../pages/Baseclass.page').default
const {CreatenewCustomer} =require('../pages/CreateNewCustomer.page')
import { username,password } from '../helpers/helpers';

class POM_manager{

    constructor(page) {
    this.page = page;
    this.Base=new Baseclass(this.page)
    this.Createnew=new CreatenewCustomer(this.page)
     
    }
    getBaseclass(){
      return this.Base.login(username,password)
    }
    getCreatenewCustomer(){
        return this.Createnew.newcustomerdetails();
    }
}
module.exports={POM_manager}