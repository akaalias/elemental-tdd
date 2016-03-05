var Boilerplate = Boilerplate || {}

Boilerplate.FormBehavior = function(element) {
  element.bind('submit', function(event) {
    event.preventDefault()
    $.ajax("test.html").done(function(data) {
      element[0].innerHTML = data
    })
  })
}

Elemental.addNamespace(Boilerplate);

