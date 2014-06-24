  $.ajax({

    url: "http://content.guardianapis.com/search?q=news&show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
        $( "#news" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        
      });

    }});

      $.ajax({

    url: "http://content.guardianapis.com/search?section=travel&show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#travel" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
        $( "#travel" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        
      });

    }});

      $.ajax({

    url: "http://content.guardianapis.com/search?q=football&show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#football" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
        $( "#football" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        
      });

    }});
