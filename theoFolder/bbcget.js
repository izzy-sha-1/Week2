    google.load("feeds", "1");



    function initialize() {
      var feed = new google.feeds.Feed("http://feeds.bbci.co.uk/news/rss.xml?edition=int");
      feed.setNumEntries(10);
console.log(feed);
      success: function(data) {
        console.log(data);
        console.log("hello world");
        $.each(data.responseData.feed.entries, function () {
                 $( "#bbc" ).append('<li><a target="_blank" href="' + this['link'] + '">' + this['title'] +'</a><p>' + this['contentSnippet'] + '</p></li>');
        });
        

      }};