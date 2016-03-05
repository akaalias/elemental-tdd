describe("Boilerplate.FormBehavior", function() {
  
  var $element
  
  describe("When submitted", function() {

    beforeEach(function() {
      $element = $("<form></form>")
      
      new Boilerplate.FormBehavior($element)
    })
    
    describe("When Ajax call returns 200", function() {

      it("Shows the result", function() {
        
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

    describe("When Ajax call returns anything non-200", function() {

      it("Shows an error", function() {
        
        $element.submit()
        
        request = jasmine.Ajax.requests.mostRecent();
        
        jasmine.Ajax.requests.mostRecent().respondWith({
          "status": 404,
          "contentType": 'text/plain'
        })
        
        expect($element[0].innerHTML).toBe("An error occured")
      })
    })
  })
})
