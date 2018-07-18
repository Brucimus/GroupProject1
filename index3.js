var complaintsRef = dataRef.ref("complaints");

var complaintId = window.location.search.split('=')[1];

complaintsRef.on("value", function(snapshot) {
    // debugger;
    $("#detailedHeading").text("Room: " + snapshot.val()[complaintId].roomNumber);
    $("#complaint").text("Comment: " + snapshot.val()[complaintId].comment);
});


$("#resolved").on("click", function(event) {
    event.preventDefault();
    
    complaintsRef.on("value", function(snapshot) {
        // debugger;
        console.log(snapshot.val()[complaintId]);
        complaintsRef.child(complaintId).remove();
        location.href = "index.html";
    });



  });