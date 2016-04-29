
describe('context one page', function() {
  
  beforeEach(function() {
    browser.get('/context-one');
  });

  it('is a test', function() {
    expect(element(by.tagName('h1')).getText()).toEqual('Component A');
  });
});