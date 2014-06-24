  // var url1="http://content.guardianapis.com/search?q=news&show-fields=trailText";
  
  $.ajax({
    
    type: "GET",
    url: "http://content.guardianapis.com/search?q=news&show-fields=trailText",
    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
<<<<<<< HEAD
$( "#news" ).append('<ul>"' + this['fields'].trailText + '</ul>');
=======
        $( "#news" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        
>>>>>>> 03b113caf4f0b932883f87eb05333047571763ac
      });

    }});

      $.ajax({
    
    type: "GET",
    url: "http://content.guardianapis.com/search?section=travel&show-fields=trailText",
    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#travel" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
        $( "#travel" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        
      });

    }});

      $.ajax({

    type: "GET",
    url: "http://content.guardianapis.com/search?q=football&show-fields=trailText",
    dataType: "jsonp",


    success: function(data) {

      $.each(data.response.results, function () {

        $( "#football" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
        $( "#football" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        
      });

    }});
