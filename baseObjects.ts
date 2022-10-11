import { Sport } from "./pageObjects";

const Sport = new Sport ();

test("nav links functionality", async () => {
  await Sport.navigate()
  await Sport.click(Sport.home.html)
  await Sport.click(Sport.women.html)
  await Sport.click(Sport.gear.html)
  await Sport.click(Sport.whatsNew.html)
});


test("search bar function", async () => {
  await Sport.navigate()
  await Sport.click(Sport.searchBtn)
  await Sport.findElement(Sport.searchBtn).sendKeys("Sweater")
  await Sport.click(Sport.searchBtn)
  expect(Response).toBe('search completed')
    
});

test("confirmationt test", async () => {
    await Sport.navigate ()
    await Sport.click(Sport.home.html)
    await Sport.click(Sport.women.html)
    await Sport.click(Sport.gear.html)
    await Sport.click(Sport.whatsNew.html)
    let response = await Sport.getText(Sport.cartError)
    expect(response).toBe('This is a required field')
});

test("subscription test", async () => {
  await Sport.findElement(Sport.email).sendKeys("JakeM23@gmail.com")  
  await Sport.click(Sport.subBtn)
  let response = await Sport.getText(Sport.subConfirm)
  expect(response).toBe('Thank you for your subscription')
  });


  test("subscription functionality", async () => {
    await Sport.navigate()
    await Sport.click(Sport.subBtn)
    let response = await Sport.getText(Sport.subError)
    expect(response).toBe('This is a required field.')
  });

afterAll(async () => {
  await Sport.driver.quit()
});