var complaintsRef = dataRef.ref("complaints");

var complaintId = window.location.search.split('=')[1];

complaintsRef.on("value", function(snapshot) {
    // debugger;
    $("#complaint").text(snapshot.val()[complaintId].comment);
});

