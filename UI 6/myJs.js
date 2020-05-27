$(document).ready(function(){
    $('.placeholder').click(function() {
    $(this).siblings('input').focus();
  });
  $('.form-control').focus(function() {
    $(this).siblings('.placeholder').hide();
  });
  $('.form-control').blur(function() {
    var $this = $(this);
    if ($this.val().length == 0)
      $(this).siblings('.placeholder').show();
  });
  $('.form-control').blur();
});