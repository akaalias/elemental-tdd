describe("ClickBehavior", function() {
  it("Changes the elements innerHtml to 'Hello World'", function() {
    var $element = $("<div></div>")
    var behavior = new ClickBehavior($element)

    $element.click()
    
    expect($element.innerHTML).toBe("Hello")
  })
})

describe("LoadBehavior", function() {
  var $element

  describe("When no string value is given", function() {
    it("Changes the elements innerHtml to 'Hello World'", function() {
      $element = $("<div></div>")

      new LoadBehavior($element)
      
      expect($element.innerHTML).toBe("Hello")
    })
  })

  describe("When a string value is given", function() {
    it("Changes the elements innerHtml to 'String Value'", function() {
      $element = $("<div data-string-value='String Value'></div>")

      new LoadBehavior($element)
      
      expect($element.innerHTML).toBe("String Value")
    })
  })
})
