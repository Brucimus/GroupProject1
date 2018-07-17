var complaintsRef = dataRef.ref("complaints");

var complaintId = window.location.search.split('=')[1];

complaintsRef.on("value", function(snapshot) {
    debugger;
    $("#complaint").text(snapshot.val()[complaintId].comment);
    var complaintType = snapshot.val()[complaintId].type;


    var corsProxy = "https://cors-anywhere.herokuapp.com/"
    var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=34.059307,-118.4456441&radius=3000&type="
    + complaintType + "&key=AIzaSyBg67m4cRaN6Y8oX2xd6oGK22rYDPOpQMg"; 
    debugger;
    $.ajax({
        url: corsProxy + queryURL,
        method: "GET"
    })
    .then(function(data) {

        //clear gifs from display
        var results = data.results;

        //iterate through pulled gifs to display Ratings and Gifs
        for (var i = 0; i < 5 ; i++) {

            //create div to house a gif's properties
            var placesDiv = $("<div class='imageContainer card'>");
            var placesName = results[i].name;
            var gifRating;
            if (results[i].hasOwnProperty("rating")) {
                gifRating = results[i].rating;
            } else {
                gifRating = "N/A"
            }

            // debugger;
            var gifTitle;
            if (results[i].hasOwnProperty("opening_hours")) {
                gifTitle = results[i].opening_hours.open_now;
            } else {
                gifTitle = "N/A";
            };

            var gifLocation;
            if (results[i].hasOwnProperty("vicinity")) {
                gifLocation = results[i].vicinity;
            } else {
                gifLocation = "N/A";
            };                
            // debugger;
            var nameDisplay = $("<p>").text("Name: " + placesName);
            var ratingDisplay = $("<p>").text("Rating: " + gifRating); 
            var titleDisplay = $("<p>").text("Open Now?: " + gifTitle); 
            var addressDisplay = $("<p>").text("Address: " + gifLocation);           
            // var animeImage = $("<img>");

            //append gif image
            placesDiv.append(nameDisplay);
            
            //append gif title
            placesDiv.append(titleDisplay);

            //append rating display
            placesDiv.append(ratingDisplay);

            //append rating display
            placesDiv.append(addressDisplay);

            //display div of gif properties
            $("#placesContainer").append(placesDiv);
        }

    });
});