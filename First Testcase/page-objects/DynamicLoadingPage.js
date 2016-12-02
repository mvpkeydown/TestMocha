'use strict';
var Promise = require("selenium-webdriver").promise;


function DynamicLoadingPage(driver){
    this.driver = driver;
    this.driver.get("xxxxx");
}

DynamicLoadingPage.prototype.loadElement = function(locator)
{
    this.driver.findElement(locator)
}

DynamicLoadingPage.prototype.elementVisialbe = function(el)
{
    return this.waitForElementVisiable(el, this.driver.TimeOut);
}

DynamicLoadingPage.prototype.waitForElementVisiable = function(el, timeout)
{
    var defer = Promise.defer();
    var driver =  this.driver;

    driver.wait("", timeout).then(() => {
        var element = driver.findElement(el);
        driver.wait(Utils.isElementVisialbe(el), timeout).then(() => {
            defer.fulfill(true);
        }, (error) => {
            defer.reject(error);
        });
    });

    return defer.promise;
}
