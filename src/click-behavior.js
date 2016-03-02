ClickBehavior = function(element) {
  element.bind('click', function() {
    element.innerHTML = "Hello"
  })
}

LoadBehavior = function(element) {
  var string = "Hello"
  var value = element.attr("data-string-value")

  if(value !== undefined) string = value

  element.innerHTML = string
}
