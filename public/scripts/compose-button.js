$(document).ready( () => {
  $("#compose-button").on("click", () => {
    $("#new-tweet").slideToggle( () => {
      $("#new-tweet").find("textarea").focus();
    });
  })
})
