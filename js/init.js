(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
  /*$('.fixed-action-btn a.btn-floating.btn-large').on('click', function(e){
    $('.fixed-action-btn').toggleClass("active");
    e.preventDefault();
  }
  );*/
});