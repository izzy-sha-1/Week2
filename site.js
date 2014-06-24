  $.ajax({

    url: "http://content.guardianapis.com/search?section=news",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
<<<<<<< HEAD
        
=======
        $( "#news" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        
        if ( i === 10 ) {
          return false;
        }
>>>>>>> 3693ad59a1d1f7f34d73466b5d09632d066e9831

      });

    }});

      $.ajax({

    url: "http://content.guardianapis.com/search?section=travel",

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
