/**
 * Created by tangxl on 16-12-6.
 */
var index = {
  time_axis_tpl: _.template($('#time_axis_tpl').html()),
  technical_top_tpl: _.template($('#technical_top_tpl').html()),
  mac_text_tpl: _.template($('#mac_text_tpl').html()),
  max_img_tpl: _.template($('#max_img_tpl').html()),
  bottom_triunity_tpl: _.template($('#bottom_triunity_tpl').html()),
  device_line_tpl: _.template($('#device_line_tpl').html()),
  diary_text_tpl: _.template($('#diary_text_tpl').html()),
  worker_line_tpl: _.template($('#worker_line_tpl').html()),
  ready_init:function() {
/*    alert(window.screen.width);*/
    var self = this;
    var screen_height = $(document).height();
    var one_scale = 315/500;
    var two_scale = 226/500;
    var three_scale = 148/500;
    var $award1 = $('.award1');
    var $award2 = $('.award2');
    var $award3 = $('.award3');
    var bar_width = $('.cup-bar').width();
    var one_bottom = bar_width*one_scale;
    var two_bottom = bar_width*two_scale;
    var three_bottom = bar_width*three_scale;
    var one_height = $award1.css({
      bottom:one_bottom +'px'
    }).height();
    var two_height = $award2.css({
      bottom:two_bottom +'px'
    }).height();
    var three_height = $award3.css({
      bottom:three_bottom +'px'
    }).height();
    $('.technical-num1').css({
      bottom:(one_bottom-40) +'px'
    });
    $('.technical-num2').css({
      bottom:(two_bottom-40) +'px'
    });
    $('.technical-num3').css({
      bottom:(three_bottom-40) +'px'
    });
    $('#form-page').css({
      height:screen_height + 'px'
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
    var $init_url = $('#init-url');
    var url = '<%=base%>' + $init_url.attr('url');
    COMMON_FUNC.ajax_get($init_url,{ hosid:18}, url, 'init_callback', function(result) {
      if (result.success) {
        $('#hospitalName').text(result.data.hospitalName);
        var time_axis_tpl = self.time_axis_tpl(result.data);
        $('#time_tpl_html').html(time_axis_tpl);
        $('#numberEquipment').text(result.data.numberEquipment);
        $('#valueEquipment').text(result.data.valueEquipment);
        var technical_top_tpl = self.technical_top_tpl(result.data);
        $('#technical_tpl_html').html(technical_top_tpl);
        $('.technical-name1').css({
          bottom:(one_bottom + one_height + 15) +'px'
        });
        $('.technical-name2').css({
          bottom:(two_bottom + two_height+ 15) +'px'
        });
        $('.technical-name3').css({
          bottom:(three_bottom + three_height+ 15) +'px'
        });
        var mac_text_tpl = self.mac_text_tpl(result.data);
        $('#use_mac_html').html(mac_text_tpl);
        var max_img_tpl = self.max_img_tpl(result.data);
        $('#mac_img_html').html(max_img_tpl);
        var bottom_triunity_tpl = self.bottom_triunity_tpl(result.data);
        $('.bottom-triunity').html(bottom_triunity_tpl);
        var device_line_tpl = self.device_line_tpl(result.data);
        $('#device-section').html(device_line_tpl);
        $('#saveTime').html(result.data.saveTime);
        var diary_text_tpl = self.diary_text_tpl(result.data);
        $('#device-diary-html').html(diary_text_tpl);
        var worker_json = [
          {
            prize: result.data.prize1,
            fix: result.data.fix1,
            description: result.data.description1,
            prize_index:1
          },
          {
            prize: result.data.prize2,
            fix: result.data.fix2,
            description: result.data.description2,
            prize_index:3
          },
          {
            prize: result.data.prize3,
            fix: result.data.fix3,
            description: result.data.description3,
            prize_index:5
          }
        ];
        var worker_line_tpl = self.worker_line_tpl({worker_json: worker_json});
        $('.worker-content').html(worker_line_tpl);
        var mySwiper = new Swiper('.swiper-container', {
          direction : 'vertical',
          onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
          },
          onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            console.log(swiper.activeIndex);
            switch (swiper.activeIndex) {
              case 1:
                self.time_axle_animate();
                break;
              case 2:
                self.standing_book();
                self.hide_chapter('technical-chapter');
                break;
              case 3:
                self.chapter_animate('technical-chapter');
                break;
              case 4:
                self.hide_chapter('technical-chapter');
                break;
              case 6:
                self.hide_chapter('diary-chapter');
                break;
              case 7:
                self.chapter_animate('diary-chapter');
                break;
              case 8:
                self.hide_chapter('diary-chapter');
                break;
              default :
                break;
            }
          }
        });
      }
    });
  },

  time_axle_animate: function() {
    var $min_radius_line = $('.min-radius-line');
    $min_radius_line.css({
      transition: 'height 0s',
      width:0
    });
    setTimeout(function() {
      $min_radius_line.css({
        transition: 'width 2s'
      });
      $('.min-radius-line1').css({
        width: '50%'
      });
      $('.min-radius-line2').css({
        width: '47%'
      });
    },4000);
  },

  standing_book: function() {
    $('.toop-outer-img').css({
      transition: 'opacity 0s',
      opacity: 0
    });
    $('.toop-inside-img').css({
      transition: 'opacity 0s',
      opacity: 0
    });
    setTimeout(function() {
      _(16).times(function(n){
        setTimeout(function() {
          $('.toop-inside-img'+ (n+1)).css({
            transition: 'opacity 0.2s',
            opacity: 1
          });
        }, 60 *n);
        setTimeout(function() {
          $('.toop-outer-img'+ (n+1)).css({
            transition: 'opacity 0.2s',
            opacity: 1
          });
        }, 80 *n);
      });
    }, 500);
  },

  chapter_animate: function(class_name) {
    var $chapter = $('.'+ class_name);
    setTimeout(function(){
      if (class_name === 'technical-chapter') {
        $chapter.css({
          top:'7rem',
          right:'3rem',
          width:'9rem',
          opacity: 1
        })
      }
      else if(class_name === 'diary-chapter') {
        $chapter.css({
          top:'4rem',
          right:'1rem',
          width:'6rem',
          opacity: 1
        })
      }

    }, 2800)
  },

  hide_chapter: function(class_name) {
    var $chapter = $('.'+ class_name);
    $chapter.css({
      top:'100%',
      right:'100%',
      width:'100%',
      opacity: 0
    })
  },

  input_focus: function($obj) {
    setTimeout(function() {
      var $input_parent = $obj.parent();
      var posioton_top = $input_parent.position().top;
      var $apply_form_slide = $input_parent.closest('.form');
      $apply_form_slide.scrollTop(posioton_top);
    }, 500);
  },

  apply_form: function($form) {
    var data = $form.serialize();
    var url = '<%=base%>' + $form.attr('url');
    COMMON_FUNC.ajax_get($form, data, url, 'form_callback', function(result){

    });
  },

  my_share: function() {
    $('#prompt_back').css({
      display:'block',
      'opacity': 1
    });
  },

  prompt_back: function() {
    $('#prompt_back').css({
      display:'none',
      'opacity': '0'
    });
  },

  apply_btn: function() {
    $('#form-page').css('display', 'block');
  },

  back_icon: function() {
    var $form_page = $('#form-page');
    $form_page.css('display', 'none');
    var $form = $form_page.find('form');
    $form.form_clear();
  },

  music_icon: function($obj) {
    $obj.toggleClass('start');
  }
};

$(function(){
  index.ready_init();
}).on('click', '.input-line input', function(e) {
  index.input_focus($(this));
}).on('submit', '#apply_form', function() {
  index.apply_form($(this));
  return false;
}).on('click', '.my-share', function() {
  index.my_share();
}).on('click', '#prompt_back', function() {
  index.prompt_back();
}).on('click', '#apply-btn', function() {
  index.apply_btn();
}).on('click', '#back-icon', function() {
  index.back_icon();
}).on('click', '.music-icon', function() {
  index.music_icon($(this));
})
;
