var Boilerplate = Boilerplate || {}

Boilerplate.LoadBehavior = function(element) {
  var string = "Hello"
  var value = element.attr("data-string-value")
  
  if(value !== undefined) string = value
  
  element.innerHTML = string
}

Elemental.addNamespace(Boilerplate);

