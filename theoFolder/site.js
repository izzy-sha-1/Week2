  $.ajax({

    url: "http://content.guardianapis.com/search?section=news",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
$( "#news" ).append('<ul>"' + this['fields'].trailText + '</ul>');
      });

    }});


  