// Hide/show the new tweet form upon clicking the nav-bar compose button

$(document).ready( () => {
  $("#compose-button").on("click", () => {
    $("#new-tweet").slideToggle( () => {
      $("#new-tweet").find("textarea").focus();
    });
  })
})
