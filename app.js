var complaintsRef = dataRef.ref("complaints");


$(document).ready(function() {



$("#submit").on("click", function(event) {
    event.preventDefault();
    

    // get input values from index.html
    var name = $("#employee-name-input").val();
    var date = moment()._d;
    var comment = $("#comment-input").val();
    // var category = $("#category-input").val();
    // var resolved = $("#resolution-input").val();
    var roomNumber = $("#roomnumber-input").val();
    var shift = $("#shift-input").val();
    var type = $("#type-input").val();
    console.log(shift);

    // puts input values into an object
    var complaints = {
        name: name,
        date: date.toUTCString(),
        comment: comment,
        roomNumber: roomNumber,
        shift: shift,
        type: type
    };


    // push the object to Firebase
    complaintsRef.push(complaints);


  });
  
complaintsRef.on("child_added", function(snapshot) {
    // debugger;
    
    var tableBody = $("#table-body");
    var tableRow = $("<tr>");
    var tableName = $("<td>").text(snapshot.val().name);
    var tableComment = $("<td>").text("comment");
    var tableRoomNumber = $("<th>").text(snapshot.val().roomNumber);
    var tableDate = $("<td>").text(snapshot.val().date);
    var complaintLink = $("<td>");
    var a = $("<a>")
    a.attr("href", "index3.html?complaint-id=" + snapshot.key).text("Complaint Info");
    complaintLink.append(a);
    tableRoomNumber.attr("scope", "row");
    var tableShift = $("<td>").text(snapshot.val().shift)
    var tableType = $("<td>").text(snapshot.val().type)

    tableBody.append(tableRow).append(tableRoomNumber).append(tableName).append(tableDate).append(complaintLink).append(tableShift).append(tableType);

});

});

//index3.js
/*
    var complaintId = window.location.search.split('=')[1];
    complaintsRef

*/
