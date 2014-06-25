  var topics = ["travel", "news", "football"];
  for (i=0;i < topics.length;i++){

    $.ajax({

      url: "http://content.guardianapis.com/search?q=travel&show-fields=trailText",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {

          $( "#travel" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
          $( "#travel" ).append('<ul>"' + this['fields'].trailText + '</ul>');
        });

      }});
  };
  