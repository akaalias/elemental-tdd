var Boilerplate = Boilerplate || {}

Boilerplate.FormBehavior = function(element) {
  element.bind('submit', function(event) {
    event.preventDefault()
    $.ajax("test.html")
      .success(function(data) {
        element[0].innerHTML = data
      }).error(function(data) {
        element[0].innerHTML = "An error occured"
      })
  })
}

Elemental.addNamespace(Boilerplate);
