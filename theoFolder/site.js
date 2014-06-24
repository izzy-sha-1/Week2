  var topics = ["sport", "news", "travel", ];
  for (i=0;i < topics.length;i++){
console.log(topics[i]);

  $.ajax({

    url: "http://content.guardianapis.com/search?q=debate&show-fields=trailText",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
$( "#news" ).append('<ul>"' + this['fields'].trailText + '</ul>');
      });

    }});


