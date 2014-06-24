$.ajax({
        url: "http://content.guardianapis.com/search?section=football",
        dataType: "jsonp",
        success: function( data ) {
            $( "#weather1" ).append("<li>" + data.response.results[3].webTitle + "</li>");
        }
    });
