/**
 * Created by tangxl on 16-12-6.
 */
var index = {
  ready_init:function() {
    var self = this;
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
    })
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