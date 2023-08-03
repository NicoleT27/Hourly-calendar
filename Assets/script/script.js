var today = dayjs();

var currentTime = today.format("H");

var currentDay = $("#currentDay").text(
  today.format(" dddd MMMM D YYYY" + " " + "hh:mm a")
);

function timeColor() {
  $(".time-block").each(function () {
    var hour = parseInt(this.id);
    $(this).toggleClass("past", hour < currentTime);
    $(this).toggleClass("present", hour == currentTime);
    $(this).toggleClass("future", hour > currentTime);
 });
}

timeColor();



$(".saveBtn").on("click", function () {
  var event = $(this).closest(".description").val();
  var hour = $(this).closest(".time-block").attr("id");
  localStorage.setItem(hour, event);
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//
//  make a loop to select each item with the a common class using jquery, you can take that id and compare the number to the current hour

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

