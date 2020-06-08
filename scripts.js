$(document).ready(function() {
  $("#favThings").submit(function(event) {
    event.preventDefault();
    const food = $("#food").val();
    const drink = $("#drink").val();
    const music = $("#music").val();
    const activity = $("activity").val();
    const favThings = [food, drink, music, activity];
    const newArray = [];
    newArray.push(favThings[1], favThings[0], favThings[2]);
    $("ul#things").append("<li>" + newArray[0] + "</li>");
    $("ul#things").append("<li>" + newArray[1] + "</li>");
    $("ul#things").append("<li>" + newArray[2] + "</li>");
  });
});