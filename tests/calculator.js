let homepage = require('../pages/homepage');

describe('demo calculator tests',function(){

    it('addition test',function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');

        browser.sleep(2000);

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
        
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('7');

        browser.sleep(2000);
    });

    //Second test for subtraction failure
    it('subtraction test',function(){

        //browser.get('https://juliemr.github.io/protractor-demo/');
        homepage.get('https://juliemr.github.io/protractor-demo/');

        browser.sleep(2000);

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstNumber('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondNumber('3');
        
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo1();

        //let result = element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
        homepage.verifyResult('7');

        browser.sleep(2000);
    });
});