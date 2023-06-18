$("#menu").click(() => {
  $("#menuLinks").show();
  $("#close").show();
  $("#menu").hide();
});

$("#close").click(() => {
  $("#menuLinks").hide();
  $("#close").hide();
  $("#menu").show();
});
