/**
 * Created by tangxl on 16-12-6.
 */
var index = {
  ready_init:function() {
    var self = this;
    var one_scale = 315/500;
    var two_scale = 226/500;
    var three_scale = 148/500;
    var bar_width = $('.cup-bar').width();
    var one_bottom = bar_width*one_scale;
    var two_bottom = bar_width*two_scale;
    var three_bottom = bar_width*three_scale;
    var one_height = $('.award1').height();
    var two_height = $('.award2').height();
    var three_height = $('.award3').height();
    $('.award1').css({
      bottom:one_bottom +'px'
    });
    $('.award2').css({
      bottom:two_bottom +'px'
    });
    $('.award3').css({
      bottom:three_bottom +'px'
    });
    $('.technical-num1').css({
      bottom:(one_bottom-40) +'px'
    });
    $('.technical-num2').css({
      bottom:(two_bottom-40) +'px'
    });
    $('.technical-num3').css({
      bottom:(three_bottom-40) +'px'
    });
    $('.technical-name1').css({
      bottom:(one_bottom + one_height + 15) +'px'
    });
    $('.technical-name2').css({
      bottom:(two_bottom + one_height+ 15) +'px'
    });
    $('.technical-name3').css({
      bottom:(three_bottom + one_height+ 15) +'px'
    });
    $('.hoop-box').each(function(index, dom) {
      var $dom = $(dom);
      var width = $dom.width();
      $dom.css({
        height: width + 'px'
      });
    });
    $('.summing-head').each(function(index, dom) {
      var $dom = $(dom);
      var width = $dom.width();
      var height = width*58 / 660;
      $dom.css({
        height: height + 'px'
      });
    });
    var mySwiper = new Swiper('.swiper-container', {
      direction : 'vertical',
      loop: false
    });
  },

  input_focus: function($obj) {
    setTimeout(function() {
      var $input_parent = $obj.parent();
      var posioton_top = $input_parent.position().top;
      var $apply_form_slide = $input_parent.closest('.apply-form-slide');
      $apply_form_slide.scrollTop(posioton_top);
    }, 500);
  }
};

$(function(){
  index.ready_init();
}).on('click', '.input-line input', function(e) {
  index.input_focus($(this));
})
;