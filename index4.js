var complaintsRef = dataRef.ref("complaints");
    
$("#back").on("click", function(event) {
    event.preventDefault();
  
    complaintsRef.on("value", function(snapshot) {
        location.href = "index.html";
   });
 });


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
    location.href = "index.html";


  });


 $("#back").on("click", function(event) {
    event.preventDefault();
    location.href = "index.html";

 });