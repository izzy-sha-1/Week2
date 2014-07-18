

google.load("feeds", "1");



    function initialize() {
      var feed = new google.feeds.Feed("http://feeds.bbci.co.uk/news/rss.xml?edition=int");
      feed.setNumEntries(10);
      console.log(feed),
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById("feed");
          for (var i = 0; i < result.feed.entries.length; i+=1) {
            var entry = result.feed.entries[i];
            
            console.log(entry)
            var line = '<a href="' + entry.link + '">' + entry.title + '</a>' + '<p>' + entry.contentSnippet + '</p>' ;
          
            var div = document.createElement("li");
           
           console.log(line)
           
           var newslist
           
            var newslist = div.appendChild(document.createTextNode(line));



            
           // var div = document.createElement("li");
           // div.appendChild(document.createTextNode(entry.contentSnippet));
            
            container.appendChild(div);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize);
