(function() {
  var gardianAPI = "http://content.guardianapis.com/search?q=football";
  $.getJSON( gardianAPI, function(obj) { 
  $.each(obj, function(value) { 
         $("ul").append("<li>"+value.response.results.webTitle+"</li>");
  });
 });
})();