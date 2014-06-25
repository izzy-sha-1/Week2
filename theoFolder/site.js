  var topics = ["travel", "news", "football"];
  for (i=0;i < topics.length;i++){

    $.ajax({

      url: "http://content.guardianapis.com/search?q="+ topics[i] +"&show-fields=trailText",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {

          $( '"#'+ topics[i] '"').append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
          $( '"#'+ topics[i] '"').append('<ul>"' + this['fields'].trailText + '</ul>');
        });

      }});
  };
  
