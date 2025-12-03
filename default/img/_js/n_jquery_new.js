



/*jslint browser: true*/
/*global $, jQuery*/

$(function () {

    

    
    /* 硫붿씤�щ씪�대뵫 �쒓컙媛꾧꺽 : de01, de02, de03 怨듯넻�곸슜 */
 $('.carousel').carousel({
        interval: 6000
  });
    
    
    
    
    
    /* �곷떒怨좎젙 */
    $(window).scroll(function () {
        var gnb = $('.gnb');
        
        if ($(this).scrollTop() > 10) {
            gnb.addClass('on');
            gnb.find('.mainmenu').addClass('on');
            $('.nt_sitemap').addClass('on');
        } else {
            gnb.removeClass('on');
            gnb.find('.mainmenu').removeClass('on');
            $('.nt_sitemap').removeClass('on');
        }
    });
    


    /* �ㅻ퉬寃뚯씠�� 遺꾨쪟 */
	$('.mainmenu ul li').on({
		mouseover : function () {
			$(this).find('.submenu').stop().slideDown(200);
		},
		mouseout : function () {
			$(this).find('.submenu').stop().slideUp(200);
		},
		click: function () {
            if ($(window).width() < 768) {
                $(this).find('> a').attr('href', '#none');
            }
            
			$(this).toggleClass('s_on');
			if ($(this).hasClass('s_on')) {
				$(this).find('.submenu').slideDown();
				$(this).siblings().removeClass('s_on');
			} else {
				$(this).find('.submenu').slideUp();
			}
		}
	});
    
    
    
    
    /**/
    $('.nt_quick').on({
		mouseover : function () {
			$(this).find('ul').stop().slideDown(200);
		},
		mouseout : function () {
			$(this).find('ul').stop().slideUp(400);
		}
	});
    
    
    
    
    
    /**/
    $('.nt_shop').on({
		mouseover : function () {
			$(this).find('ul').stop().slideDown(200);
		},
		mouseout : function () {
			$(this).find('ul').stop().slideUp(400);
		},
        click: function () {
			$(this).toggleClass('s_on');
			if ($(this).hasClass('s_on')) {
				$(this).find('ul').slideDown();
			} else {
				$(this).find('ul').slideUp();
			}
		}
	});
    
    
    
    


    /**/
	$('.logoArea p').click(function () {
		$(this).toggleClass('on');

		if ($(this).hasClass('on')) {
			$('.mainmenu').slideDown();
		} else {
			$('.mainmenu').slideUp();
		}
	});


//	$('.logoArea .logo').on({
//		mouseenter: function () {
//			$(this).find('.logo_off').stop().animate({
//				opacity: 0,
//				left: 20
//			}, 300);
//			$(this).find('.logo_on').stop().animate({
//				opacity: 1,
//				left: 0
//			}, 300);
//		},
//		mouseleave: function () {
//			$(this).find('.logo_off').stop().animate({
//				opacity: 1,
//				left: 0
//			}, 300);
//			$(this).find('.logo_on').stop().animate({
//				opacity: 0,
//				left: 20
//			}, 300);
//		}
//	});


    
    
    

    /* scrolltop */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

/*    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    }); */
    
    
    
    
    

    /**/
    $('.n_swap').each(function () {
		var $this = $(this);

		$this.bind('mouseenter', function () {
			var srcArr = $(this).attr('src').split('.');

			$(this).attr('src', srcArr[0] + '_on.' + srcArr[1]);
			$(this).addClass('on');
		}).bind('mouseleave', function () {
			$(this).attr('src', $(this).attr('src').replace('_on', ''));
			$(this).removeClass('on');
		});
	});
    
    
    
    
    
    /* �댄똻 */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    
    
    
    
    
    /* �대�吏� �뺣�,異뺤냼 */
	$('.scaleUp').on({
		mouseover: function () {
			$(this).addClass('on');
		},
		mouseout: function () {
			$(this).removeClass('on');
		}

	});
    
    $('.scaleDown').on({
		mouseover: function () {
			$(this).addClass('on');
		},
		mouseout: function () {
			$(this).removeClass('on');
		}

	});
    
    

    

	/* �④낵01 */
	$('.effect01').each(function () {
	    $(this).on({
	        mouseenter: function () {
	            $(this).find('.effect01-box').stop().animate({
	                bottom: 0,
	                opacity: 1
	            }, 200);
	        },
	        mouseleave: function () {
	            $(this).find('.effect01-box').stop().animate({
	                bottom: -50,
	                opacity: 0
	            }, 200);
	        }
	    });
	    $(this).css({
	        cursor: 'pointer'
	    });
	});


    
    

	/* �④낵02 */
	$('.effect02').each(function () {

	    $(this).on({
	        mouseenter: function () {
	            $('.effect02-box').stop().animate({
	                top: 20,
	                opacity: 0.2
	            }, 100);
	            $(this).find('.effect02-box').stop().animate({
	                top: 0,
	                opacity: 1.0
	            }, 200);
	        },
	        mouseleave: function () {
	            $('.effect02-box').stop().animate({
	                top: 10,
	                opacity: 0.8
	            }, 100);
	            $(this).find('.effect02-box').stop().animate({
	                top: 10,
	                opacity: 0.8
	            }, 200);
	        }
	    });
	    $(this).css({
	        cursor: 'pointer'
	    });
	});



    
    
    
	/* �④낵03 */
	$('.effect03').each(function () {
	    $(this).on({
	        mouseenter: function () {
	            $(this).find('.effect03-box').stop().animate({
	                top: '50%',
	                opacity: 1
	            }, 200);
	        },
	        mouseleave: function () {
	            $(this).find('.effect03-box').stop().animate({
	                top: '40%',
	                opacity: 0
	            }, 200);
	        }
	    });
	    $(this).css({
	        cursor: 'pointer'
	    });
	});
    
    
    
    
    
    
    /* map 吏��� : 援ш�吏��� */
    $('.map_google').click(function () {
        $(this).find('iframe').addClass('clicked');
    }).mouseleave(function () {
        $(this).find('iframe').removeClass('clicked');
    });
    
    
    /************************************************************
    寃뚯떆��
    ************************************************************/
    
    /*寃뚯떆��:怨듯넻*/
    $('.n_board_txt, .n_board_gallery').find('table[border="1"]').attr('border', '0');
    
    
    /* 移댄뀒怨좊━ �곸뿭 ****************************************/
    $('form[name=com_board_form]').parent().addClass('categoryArea');
    $('form[name=com_board_form]').parent().find('td').removeAttr('align');
//    $('form[name=com_board_form]').parent().css('marginBottom', '5px');
//    $('form[name=com_board_form]').parent().find('img').remove();
//    $('form[name=com_board_form]').parent().find('td > b').remove();

    
        
    
    /* �볤��곸뿭 ***********************************************/
    /* �볤��곸뿭 : �묒꽦 */
    $('.board_comment_bgcolor tbody:not(:first-child)').css({
        'border': '0px solid #f00',
        'padding': '0 10px',
        'display': 'block'
    });
    /* �볤��곸뿭 : �묒꽦�곸뿭 */
    $('.comment_txt > textarea').css({
        'margin': '0 0 5px',
        'padding': '10px',
        'border': '1px solid #ccc',
        'height': '100px'
    });
    /* �볤��곸뿭 : �묒꽦�곸뿭 : 踰꾪듉(�볤��ш린) */
    $('.comment_txt > input[type=image]').css({
        'paddingRight': '10px',
        'float': 'left'
    });
    
    /* �볤��곸뿭 : �볤�紐⑸줉 */
    $('.comment_name').parent('tr').children('td').removeAttr('width');
    $('.comment_name').parent('tr').children('td:nth-child(2)').addClass('comment_view');
    $('.comment_name').parent('tr').children('td:nth-child(3)').addClass('comment_hour');
    
    /* �볤��곸뿭 : �볤�紐⑸줉 */
    $('.comment_name').parent().parent().parent().parent().parent().parent().parent().addClass('commentArea');
    
    
    
    
    
    
    /* �띿뒪�명삎 : 湲�紐⑸줉 : 理쒖긽�� �쇱씤�곸뿭 */
    $('.n_board_txt .bbsno').parents('table').prev().find('td').addClass('board_top_line');
    
    /* �띿뒪�명삎 : 湲�紐⑸줉 'tr' �좏깮*/
    $('.n_board_txt .bbsno').parent('tr').addClass('tr_line');
    
    /* �띿뒪�명삎 : 湲�紐⑸줉 : 理쒖긽�� 援щ텇�곸뿭 */
    $('.n_board_txt .att_title').parent('tr').addClass('boardTitBar');
    
    /* �띿뒪�명삎 : 湲�紐⑸줉 : 理쒖긽�� �� �띿꽦 */
    $('.n_board_txt .att_title font').removeAttr('style');
    
    /* �띿뒪�명삎 : 湲�蹂닿린 / 湲��곌린*/
    $('.n_board_txt .board_bgcolor, .n_board_gallery .board_bgcolor').parent('tr').addClass('diviedLine');
    
    /* �띿뒪�명삎 : 紐⑸줉�꾩껜�곸뿭 : �섎떒�щ갚*/
    $('.boardTitBar').parent().parent().css('marginBottom', '20px');
    
    /* 怨듯넻 : 紐⑸줉 : �섎떒 �곸뿭�� */
    $('.paging').css('padding', '10px 0');
    $('.paging').parent().parent().parent().prev().css('border', '1px solid #fff');
    $('.paging').parent('tr').next().remove();
    
    
    
    
    
    
    // 媛ㅻ윭由щぉ濡� : 愿�由ъ옄濡쒓렇�몄떆 寃뚯떆臾쇱껜�щ컯��
    $('.n_board_gallery').find('input[name=delete_check_notice\\[\\]]').parent('td').addClass('adminCheck');
    
    $('.n_board_gallery').find('input[name=delete_check_notice\\[\\]]').addClass('adminCheckBox');
    
    // 媛ㅻ윭由щぉ濡� : �대�吏��좏깮(�쒕ぉ�� �ъ슜�댁빞 ��)
    $('.gallery_subject').parent().siblings('tr:first-child').addClass('nSize');
    
    // 媛ㅻ윭由щぉ濡� : �ъ씠利�
    $('.nSize').parents('.bbsnewf5').parents('td').addClass('boxArea');
    
    // �띿뒪�� �댁슜
    $('.gallery_etc').css('color', '#fff');
    
    
    
    

    
    /* �쇰찓�� : ��ぉ�� �띿꽦 �쒓굅 ***********************************************/
    $('.formmail_title_bgcolor font').removeAttr('style');
    /* 媛쒖씤�뺣낫 �섏쭛�숈쓽 �곸뿭 */
    $('.np_form input[name=com_formmail_check_safe]').closest('table').addClass('personalInformation');
    /* �ㅽ뙵�깅줉諛⑹� �곸뿭 */
    $('#captcha').closest('tr').addClass('captcha');
    /* �쇰찓�� : �섎떒踰꾪듉�곸뿭 : �곷떒�щ갚 */
    $('a[href="javascript: document.com_formmail.reset();"]').parent().addClass('formButton');
    /* �쇰찓�� : �섎떒踰꾪듉�곸뿭 : 踰꾪듉 : �뺤씤 */
    $('.formButton a:first-child img').attr('src', '../img/component/board/board_1/confirm.gif');
    /* �쇰찓�� : �섎떒踰꾪듉�곸뿭 : 踰꾪듉 : 痍⑥냼 */
    $('.formButton a:last-child img').attr('src', '../img/component/board/board_1/cancel.gif');
    
    
    
    
    
    
    /* 湲��곌린 : �섎떒踰꾪듉�곸뿭�� �곷떒�щ갚 */
    $('a[href="javascript: document.com_board.reset()"]').parent().parent().parent().parent().addClass('nbButton');
    
    /* 湲�蹂닿린 : �섎떒踰꾪듉�곸뿭 */
    $('img[align=absmiddle]').closest('table').parent().parent().parent().parent().addClass('veiwBottonArea');
    
    /* 湲�蹂닿린 : �섎떒�쇱씤 & 湲�紐⑸줉由ъ뒪�� */
    $('.veiwBottonArea').siblings('table:last').find('td').css('backgroundColor', '#fff');
    
    /* 湲�蹂닿린 : �섎떒 踰꾪듉 */
    $('img[src="/cimg/btn_sdel.gif"]').attr('src', '../img/component/board/board_1/admin_delete.gif');
    $('img[src="/cimg/move.gif"]').attr('src', '../img/component/board/board_1/admin_move.gif');
    $('img[src="/cimg/copy.gif"]').attr('src', '../img/component/board/board_1/admin_copy.gif');
    
    
    
    
    
    
    
    /*****************************************************************
    �쇱젙愿�由�
    *****************************************************************/
    $('.np_schedule table').attr('width', '100%');
    $('.np_schedule').find('input[name=subject]').attr('size', '').css('width', '100%');
    
    
    

    
    
    /*****************************************************************
    �쇳븨紐� : �섏씠吏�
    *****************************************************************/
    $('.tb_font04').parent().siblings('td[width=1]').remove();

    
    
    

    
    
    /*****************************************************************
    Animations
    *****************************************************************/
    var contentWayPoint = function () {
        $('.animate-box').waypoint(function (direction) {

            if (direction === 'down' && !$(this.element).hasClass('animatedFast')) {

                $(this.element).addClass('item-animate');
                setTimeout(function () {

                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            
                            var effect = el.data('animate-effect');
                            
                            if (effect === 'fadeInUp') {
                                el.addClass('fadeInUp animatedFast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animatedFast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animatedFast');
                            } else if (effect === 'fadeInDown') {
                                el.addClass('fadeInDown animatedFast');
                            } else {
                                el.addClass('fadeInUp animatedFast');
                            }
                            
                            el.removeClass('item-animate');
                            
                        }, k * 300, 'easeInOutExpo');
                    });

                }, 80);
            }
        }, {
            offset: '95%'
        });
    };

    // Document on load.
    $(function () {
        contentWayPoint();
    });
    
    
    
    
    

    
    
    
    
    
});


    /*****************************************************************
    �レ옄移댁슫�� (�뚯깮吏꾪뻾嫄댁닔)
    *****************************************************************/

(function( $ ){
  "use strict";

  $.fn.counterUp = function( options ) {

    // Defaults
    var settings = $.extend({
        'time': 1000,
        'delay': 10
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;

        var counterUpper = function() {
            var nums = [];
            var divisions = $settings.time / $settings.delay;
            var num = $this.text();
            var isComma = /[0-9]+,[0-9]+/.test(num);
            num = num.replace(/,/g, '');
            var isInt = /^[0-9]+$/.test(num);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
            var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;

            // Generate list of incremental numbers to display
            for (var i = divisions; i >= 1; i--) {

                // Preserve as int if input was int
                var newNum = parseInt(num / divisions * i);

                // Preserve float if input was float
                if (isFloat) {
                    newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                }

                // Preserve commas if input had commas
                if (isComma) {
                    while (/(\d+)(\d{3})/.test(newNum.toString())) {
                        newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                    }
                }

                nums.unshift(newNum);
            }

            $this.data('counterup-nums', nums);
            $this.text('0');

            // Updates the number until we're done
            var f = function() {
                $this.text($this.data('counterup-nums').shift());
                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'), $settings.delay);
                } else {
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            };
            $this.data('counterup-func', f);

            // Start the count up
            setTimeout($this.data('counterup-func'), $settings.delay);
            // Destroy waypoint
            this.destroy();
        };

        // Perform counts when the element gets into view
        $this.waypoint({ offset: '100%', handler: counterUpper});
    });

  };

})( jQuery );


$('.counter').counterUp();







