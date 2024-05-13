const {Builder, Key, By, until} = require('selenium-webdriver');

describe('My First Test', function() {
        let driver;
        before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        });
    
//Task 1
it ("Test Case: Стан активності елемента", async function firstTest() {
    await driver.get('http://the-internet.herokuapp.com/dropdown');
    let dropdown = await driver.findElement(By.id('dropdown'));
    await dropdown.click();
    let option1 = await dropdown.findElement(By.css("option: nth-child(1)"));
    let option1Enabled = await option1.isEnabled();
    option1Enabled ? console.log("Option 1 enabled") : console.log("Option 1 disabled");
    let option2 = await dropdown.findElement(By.css("option: nth-child(1)"));
    let option2Enabled = await option2.isEnabled();
    option2Enabled ? console.log("Option 2 enabled") : console.log("Option 2 disabled");
  });
 

//Task 2
it ("Test Case: Наведення мишею на елемент", async function secondTest() {
    await driver.get('http://the-internet.herokuapp.com/hovers');
    let avatar = await driver.findElement(By.css('figure'));
    let action = new Actions(driver);
    action.moveToElement(avatar).perform();
    let text = await driver.findElement(By.css('figcaption'));
    text ? console.log("name: user1 is displayed") : console.log("name: user1 is not displayed");
  });

  //Task 3
  it ("Test Case: Заповнення форми", async function thirdTest() {
    await driver.get('http://formy-project.herokuapp.com/form');
    await driver.findElement(By.id('first-name')).sendKeys('Peter');
    await driver.findElement(By.id('last-name')).sendKeys('Peterson');
    await driver.findElement(By.id('job-title')).sendKeys('tester');
    await driver.findElement(By.id('radio-button-1')).click();
    await driver.findElement(By.id('checkbox-1')).click();
    await driver.findElement(By.css('#select-menu.option:nth-child(3)')).click();
    await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
    await driver.findElement(By.className('btn btn-lg btn-primary')).click();
    let formSubmitted =  await driver.wait(until.elementLocated(By.className('alert alert-success')));
    if (formSubmitted = true) {
        console.log("The form was successfully submitted!")
    };
  });

  //Task 4

  it ("Test Case: Сортування таблиці", async function fourthTest() {
    await driver.get('http://the-internet.herokuapp.com/tables');
    let table2 = await driver.findElement(By.id('table2'));
    js.ExecuteScript("arguments[0].scrollIntoView();", table2);
    await driver.findElement(By.className('dues')).click();
  });

  after (() => driver && driver.quit());
});