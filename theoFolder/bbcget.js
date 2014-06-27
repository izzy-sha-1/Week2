$.ajax({
      url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.digg.com/rss/index.xml",

      dataType: "jsonp",

      fsuccess: function(data) {
        $.each(data.responseData.feed.entries, function () {
                 $( "#football" ).append('<li><a target="_blank" href="' + this['link'] + '">' + this['title'] +'</a><p>' + this['contentSnippet'] + '</p></li>');
        });
        console.log(data)

      }});