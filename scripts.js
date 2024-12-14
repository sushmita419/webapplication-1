$(document).ready(function() {
    $("nav a").on("click", function(event) {
      alert("Navigating to " + $(this).text());
    });
  });
  