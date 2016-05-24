$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Woof! Woof!</li>");
    $("ul#webpage").prepend("<li>Good Choice</li>");
    $("li").click(function() {
      alert('Go Team Doggidy Dog');
      $(this).remove();
    });

    });
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>meaaarrr</li>");
    $("ul#webpage").prepend("<li>User Error 404: Please try again</li>");
    $("li").click(function() {
      alert('Cat lover? Enough said');
    });
    });
  $("button#critter").click(function() {
    $("ul#user").prepend("<li>Baaaaaa</li>");
    $("ul#webpage").prepend("<li>Go find a real pet</li>");
    $("li").click(function() {
      alert('I could really use a sweater');
    });
      });
});
