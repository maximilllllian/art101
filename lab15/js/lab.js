// Using the core $.ajax() method
$('#submit').click(function(){
  var topic = $('#topic').val();
  var apiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + topic + "?redirect=true"
  console.log(topic);
  console.log(apiURL);

  $.ajax({
    // The URL for the request (from the api docs)
    url: apiURL,
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            //id: 123,
            //api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        $('#output').html(data.extract_html);
        console.log(data);
      },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })


});

$('#NASA').click(function(){
  var apiURL = "https://apod.nasa.gov/apod/image/2103/VolcanoStars_Vella_1080.jpg"
  console.log(apiURL);

  $.ajax({
    // The URL for the request (from the api docs)
    url: apiURL,
    // The data to send (will be converted to a query string)
    data: {
            // here is where any data required by the api
            //   goes (check the api docs)
            //id: 123,
            //api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        $('#photo').html(data.extract_html);
        console.log(data);
      },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })


});
