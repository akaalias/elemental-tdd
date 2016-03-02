var Boilerplate = Boilerplate || {}

Boilerplate.ClickBehavior = function(element) {
  element.bind('click', function() {

    var string = "Hello"
    var value = element.attr("data-string-value")

    if(value !== undefined) string = value

    element.innerHTML = string
  })
}

Elemental.addNamespace(Boilerplate);
