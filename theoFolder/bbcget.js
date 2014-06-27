 <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">

    google.load("feeds", "1");



    function initialize() {
      var feed = new google.feeds.Feed("http://feeds.bbci.co.uk/news/rss.xml?edition=int");
      feed.setNumEntries(10);

      success: function(feed) {
        console.log(data);
        console.log("hello world");
        $.each(feed.responseData.feed.entries, function () {
                 $( "#bbc" ).append('<li><a target="_blank" href="' + this['link'] + '">' + this['title'] +'</a><p>' + this['contentSnippet'] + '</p></li>');
        });
        

      }};