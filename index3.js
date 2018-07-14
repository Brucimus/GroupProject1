var complaintsRef = dataRef.ref("complaints");

var complaintId = window.location.search.split('=')[1];

complaintsRef.on("value", function(snapshot) {
    // debugger;
    console.log(snapshot.val()[complaintId]);
});

