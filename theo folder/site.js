<<<<<<< HEAD
var getNews = function()
=======
$.ajax({
        url: "http://content.guardianapis.com/search?section=football",
        dataType: "jsonp",
        success: function( data ) {
            $( "#weather1" ).append("<li>" + data.response.results[3].webTitle + "</li>");
        }
    });
>>>>>>> 028475e75a5de0b346caf6115f96158ffc946a8e
