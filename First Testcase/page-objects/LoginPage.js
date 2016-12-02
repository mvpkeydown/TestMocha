'use strict';

var SEARCH_KW = {id: 'kw'};
var SEARCH_BTN = {id: 'su'};
var SEARCH_RESULT = {id: 's_tab'};
var driver;

function LoginPage(driver)
{
    this.driver = driver;
    this.driver.get("http://www.baidu.com");
    this.driver.sleep(2000);
}

LoginPage.prototype.searchWithKeywords = function(kw){
    

    this.driver.findElement(SEARCH_KW).sendKeys(kw);
    this.driver.findElement(SEARCH_BTN).click();
    this.success();
};

LoginPage.prototype.success = function(){
    this.driver.wait(function(driver) {
        return driver.getTitle().then(function(title) {
            return title.toLowerCase().lastIndexOf('shujun', 0) === 0;
        });
    }(this.driver), 3000);
}

module.exports = LoginPage;