  var topics = {'1':"travel",'2':"news",'3':""};


  $.each( topics, function( i, val ){

    

    $.ajax({

      url: "http://content.guardianapis.com/search?q="+ val +"&show-fields=trailText%2CshortUrl",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {
                 $( "#" + val ).append('<li><a target="_blank" href="' + this['fields'].shortUrl + '">' + this['webTitle'] +'</a><p>' + this['fields'].trailText + '</p></li>');
        });

      }});
  });
  

