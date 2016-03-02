describe("ClickBehavior", function() {
  describe("When there is no value given", function() {
    it("Changes the elements innerHtml to 'Hello World'", function() {
      var $element = $("<div></div>")
      
      Boilerplate.ClickBehavior($element)
      
      $element.click()
      
      expect($element.innerHTML).toBe("Hello")
    })
  })

  describe("When there is a value given", function() {
    it("Changes the elements innerHtml to 'String Value'", function() {
      var $element = $("<div data-string-value='String Value'></div>")
      
      Boilerplate.ClickBehavior($element)
      
      $element.click()
      
      expect($element.innerHTML).toBe("String Value")
    })
  })
})

