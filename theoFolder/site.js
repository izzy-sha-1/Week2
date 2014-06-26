  var topics = {'1':"travel",'2':"news",'3':"football"};
  var googleAPI = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=";


  $ .each( topics, function( i, val ){

    

    $.ajax({

      url: "http://content.guardianapis.com/search?q="+ val +"&show-fields=trailText%2CshortUrl",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {
                 $( "#" + val ).append('<li><a target="_blank" href="' + this['fields'].shortUrl + '">' + this['webTitle'] +'</a><p>' + this['fields'].trailText + '</p></li>');
        });

      }});
  });
  
   $.ajax({

      url: googleAPI + "http://feeds.bbci.co.uk/news/rss.xml" + "&callback=?",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.responseData.entries, function () {
                 $( "#bbc" ).append('<li><a target="_blank" href="' + this['link'] + '">' + this['title'] +'</a><p>' + this['description'] + '</p></li>');
        });

      }});