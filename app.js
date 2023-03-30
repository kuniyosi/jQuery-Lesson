$(function(){
  $(".box1").slideDown(5000,function(){
    $('.box1').css({
      'background-color':'#0000ff',
      'height':'200px',
      'width':'100px'
    }).slideUp();
  });
});
  