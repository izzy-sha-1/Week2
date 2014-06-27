  var topics = {'1':"travel",'2':"news",'3':"football"};


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
  

$.ajax({
      url https:"//ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.digg.com/rss/index.xml"

      dataType: "jsonp",

      fsuccess: function(bbcdata) {
        $.each(bbcdata.responseData.feed.entries, function () {
                 $( "#bbc" ).append('<li><a target="_blank" href="' + this['link'] + '">' + this['title'] +'</a><p>' + this['contentSnippet'] + '</p></li>');
        });
        console.log(data)

      }});