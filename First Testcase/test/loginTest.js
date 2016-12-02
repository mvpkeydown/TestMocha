// filename: test/LoginTest.js
'use strict';
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var assert = require("assert");
var LoginPage = require("../page-objects/LoginPage");

test.describe('Login', function() {
  this.timeout(30000);
  var driver;
  var login;

  test.beforeEach(function() {
    driver = new webdriver.Builder().forBrowser('firefox').build();
    login = new LoginPage(driver);
  });

  test.afterEach(function() {
    driver.quit();
  });

  test.it('with valid credentials', function() {
    login.searchWithKeywords("shujun");
    login.success();
  });

});