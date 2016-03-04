var Boilerplate = Boilerplate || {}

Boilerplate.AjaxBehavior = function(element) {
  $.ajax("test.html").done(function(data) {
    element[0].innerHTML = data
  });
}

Elemental.addNamespace(Boilerplate);

