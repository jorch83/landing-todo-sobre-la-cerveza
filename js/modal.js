$( ".open-modal" ).click(function() {
  var title = $(this).data("title");
  var imageTicket = $(this).data("ticket");
  $('#myModal').modal('show');
  $("#modal-title").html(title);
  $("#image-ticket").attr("src","images/ticket-" + imageTicket + ".jpg");
});
$( ".close-modal" ).click(function() {
  $('#myModal').modal('hide');
});