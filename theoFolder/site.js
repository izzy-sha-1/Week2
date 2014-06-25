  var topics = ['1':"travel",'2':"news",'3':"football"];
  


  $ .each( topics, function( i, val ){

    

    $.ajax({

      url: "http://content.guardianapis.com/search?q="+ val +"&show-fields=trailText",

      dataType: "jsonp",

      success: function(data) {
        $.each(data.response.results, function () {

          $( "#" + val ).append('<a href="' + this['webUrl'] + '"><h3>' + this['webTitle'] + '<h3></a>');
          $( "#" + val ).append('<ul>"' + this['fields'].trailText + '</ul>');
        });

      }});
  });
  
