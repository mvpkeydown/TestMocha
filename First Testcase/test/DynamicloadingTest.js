// filename: test/LoginTest.js
'use strict';
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var assert = require("assert");
var LoginPage = require("../page-objects/DynamicLoadingPage");

test.describe('Login', function() {
  this.timeout(30000);
  var driver;
  var login;

  test.beforeEach(function() {
    driver = new webdriver.Builder().forBrowser('firefox').build();
    login = new (driver);
  });

  test.afterEach(function() {
    driver.quit();
  });

  test.it('with valid credentials', function() {
    login.loadElement(xx);
    login.elementVisialbe(xx).then(result=>{
        assert.isTure(result, "");
    })
  });

});