  $.ajax({

    url: "http://content.guardianapis.com/search?section=news",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#news" ).append("<li>" + this['webTitle'] + "</li>");

      });

    }});

    $.ajax({

    url: "http://content.guardianapis.com/search?section=news",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#Travel" ).append("<li>" + this['webTitle'] + "</li>");

      });

    }});

      $.ajax({

    url: "http://content.guardianapis.com/search?section=news",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#Football" ).append("<li>" + this['webTitle'] + "</li>");

      });

    }});