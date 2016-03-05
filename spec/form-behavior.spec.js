describe("Boilerplate.FormBehavior", function() {

  var $element
  var event

  describe("When submitted", function() {

    it("Makes an Ajax call and shows the result", function() {

      $element = $("<form></form>")

      new Boilerplate.FormBehavior($element)

      $element.submit()

      request = jasmine.Ajax.requests.mostRecent();

      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'text/plain',
        "responseText": 'Hello'
      })

      expect($element[0].innerHTML).toBe("Hello")
    })
  })
})
