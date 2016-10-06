$(document).ready(function(){

  $('.ig__videos__play').click(function(e){
    $(this).next().next().show();
    $(this).next().hide();
    $(this).hide();
    $('.ig__videos').removeClass('ig__videos--overlay');
    //play the video
    $(".ig__videos__youtube")[0].src += "?autoplay=1";
    // e.preventDefault();
  });

  $('.x-out').click(function(){
    $('.ig__coaches').fadeOut();
  })

  $('.ig__header__meet').click(function(){
    $('.ig__coaches').fadeIn();
  })

  $('.ig__coaches__profiles__coach').click(function(e){
    var name = e.target.id;
    $('.ig__coaches__profiles__coach').removeClass('ig__coaches__profiles__coach--active');
    $(this).addClass('ig__coaches__profiles__coach--active');
    //show the profile
    $('.ig__info--coaches').removeClass('coach-active');
    $('#' + name + '-bio').addClass('coach-active');
  });

});
