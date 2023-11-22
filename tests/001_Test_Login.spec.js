const { test, expect } = require('@playwright/test');
import { baseurl,username,password } from '../helpers/helpers';
const {POM_manager} = require('../POMmanager/POM_manager')


test.describe('Login', () => {
let page;
test.beforeAll(async ({ browser }) => {
      const context = await browser.newContext();
      page = await context.newPage();
      await page.goto(baseurl);
  });
  
  test.afterAll(async ({ browser }) => {
    browser.close;
  });


test('Login with valid user name & password', async () => {
       
      const get=new POM_manager(page);
      await get.getBaseclass()
     
      });

test('CreateNewCustmer', async () => {
            const gett=new POM_manager(page);
            await gett.getCreatenewCustomer();
      
      });

});
      



