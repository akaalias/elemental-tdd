describe("Boilerplate.LoadBehavior", function() {
  var $element

  describe("When no string value is given", function() {
    it("Changes the elements innerHtml to 'Hello World'", function() {
      $element = $("<div></div>")

      new Boilerplate.LoadBehavior($element)
      
      expect($element[0].innerHTML).toBe("Hello")
    })
  })

  describe("When a string value is given", function() {
    it("Changes the elements innerHtml to 'String Value'", function() {
      $element = $("<div data-string-value='String Value'></div>")

      new Boilerplate.LoadBehavior($element)
      
      expect($element[0].innerHTML).toBe("String Value")
    })
  })
})
