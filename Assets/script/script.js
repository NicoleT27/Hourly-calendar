// Establishing the Day.js format for the month/date/year as well as time to then equal it to the variables currentTime,currentDay and today.
// Making it easier to utilize later in code.
var today = dayjs();

var currentTime = today.format("H");

var currentDay = $("#currentDay").text(
  today.format(" dddd MMMM D YYYY" + " " + "hh:mm a")
);
// We wrap the entire js file in a document.ready format to ensure that the page has loaded all of the content.
// prior to envoking the functions inside.
$(document).ready(function () {
  // timeColor function is then created focusing on the div with the time-block class.
  // Then the ID is found and parsed from a string to a integer.
  // Now that hour is established as a variable holding the hour as a integer
  // it is then compared to the currentTime hour
  // to check to see if it either past, during or after the current time.
  //  Using the toggleClass the function can switch between the apporpriate class as they match the criteria.
  function timeColor() {
    $(".time-block").each(function () {
      var hour = parseInt(this.id);
      $(this).toggleClass("past", hour < currentTime);
      $(this).toggleClass("present", hour == currentTime);
      $(this).toggleClass("future", hour > currentTime);
    });
  }
  // Function is called to be able to start the asynchronous execution of code
  timeColor();
  // Lastly the function below focuses on the saveBtn.

  $(".saveBtn").on("click", function () {
    // The event variable will look at the parent divs children (siblings) and find whichever is holding the class of description.
    // It then will store the value of the description class.
    // Meaning whatever the user types will be now assigned as an event.
    var event = $(this).siblings(".description").val();
    // The hour variable is looking through the parent div that holds the class of time-block and then
    // focusing specifically on its ID which holds the hours displayed for the work day.
    var hour = $(this).parent(".time-block").attr("id");
    // The localStorage is then going to get the key to hour and the value to event, thus saving the
    // hour that the user typed something in as well as the content which is the event.
    localStorage.setItem(hour, event);
  });
});
