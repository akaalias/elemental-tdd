describe("Boilerplate.AjaxBehavior", function() {

  var $element
  var request

  describe("When loaded", function() {

    beforeEach(function() {
      jasmine.Ajax.install();
    })

    it("Changes the elements innerHtml to 'Hello World'", function() {

      $element = $("<div></div>")

      new Boilerplate.AjaxBehavior($element)

      /* Jasmine Ajax Mocking must come after subject execution */
      request = jasmine.Ajax.requests.mostRecent();

      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'text/plain',
        "responseText": 'Hello'
      })

      expect($element[0].innerHTML).toBe("Hello")
      expect(jasmine.Ajax.requests.mostRecent().url).toBe('test.html');
    })
  })
})
