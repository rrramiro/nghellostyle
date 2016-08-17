'use strict';

/**
 * Protractor e2e tests.
 */
describe('first', function() {

  beforeEach(function() {
    browser.get('index.html#/first');
    browser.waitForAngular();
  });

  it('should render first template when user navigates to /first', function() {
    var p = $('p').getText()
    expect(p).toEqual('Some text in first state');
  });

  it('should render all animals', function() {
    var animals = element.all(by.repeater('animal in first.animals'));
    expect(animals.count()).toBe(3);
  });

  it('should show checkmark and cross', function() {
    var list = $$('ul')
    expect(list.last().getText()).toEqual('\u2714\n\u2718');
  });

});
