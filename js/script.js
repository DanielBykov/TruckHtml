; (function(){

function slider(){
  var widthItem = $('.item').width();
  console.log(widthItem);
  var offset = [];
  $('.item').each(function(i){
    offset.push(i * widthItem)
    $(this).css('left', offset[i]+'px');
  })
  console.log(offset);

  $('.three-sub-slides > div').each(function(i){
    console.log(offset[i]);
    $(this).click(function() {
      $('#main-slider').css('margin-left',offset[i]*-1)
    })
  })
}
slider();


})();
