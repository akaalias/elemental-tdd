var Boilerplate = Boilerplate || {}

Boilerplate.LoadBehavior = function(element) {
  var string = "Hello"
  var value = element.attr("data-string-value")
  
  if(value !== undefined) string = value
  
  element[0].innerHTML = string
}

Elemental.addNamespace(Boilerplate);

