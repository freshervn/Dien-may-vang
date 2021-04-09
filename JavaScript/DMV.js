$(document).ready(
    function () {
        // hover navbar{
         if ($('main.index').length>=1){
            $('nav.navbar-desktop address a + .LinkCate').css('display','none');
         }
        // lay phan này chèn vào phần khác
        //   run before owl
        $('.insertTo').each(
            function () {
                $newparent = $('.' + $(this).attr('data-NewParent'));
                $(this).appendTo($newparent);
            }
        )
        // chèn thành 2 dòng    
        if ($('.insertTo').length > 9) {
            var $nodelist = [];
            $($('.insertTo').get().reverse()).each(
                function () {
                    // chọn các node chẵn
                    if (($('.insertTo').index($(this)) % 2) != 0) {
                        // clone các node đó vào mảng   
                        $clone = $(this).find('.product').clone();
                        $nodelist.push($clone);
                        // xóa phầm  owl đi
                        $(this).remove();
                    }
                }
            )
            // chen khoi vao
            $('.insertTo').each(
                function () {
                    // console.log($('.insertTo').index($(this)));
                    $nodelist[$('.insertTo').index($(this))].appendTo($(this));
                    // console.log('run');
                }
            )
        }
        // click tang giá trị
        $(" button.plush ").click(
            function () {
                var $button = $(this);
                var oldValue = $button.parent().find("input").val();
                var newVal = parseFloat(oldValue) + 1;
                $button.parent().find("input").val(newVal);
            }
        );
        // click giam gia tri
        $(" button.minus ").click(
            function () {
                var $button = $(this);
                var oldValue = $button.parent().find("input").val();
                var newVal = parseFloat(oldValue) - 1;
                $button.parent().find("input").val(newVal);
            }
        );
        // lay anh lam nen
        $('article.gioi-thieu section img').each(
            function () {
                $linkimg = $(this).attr("src");
                //   console.log( $(this).parent().parent() );
                $(this).parent().parent().css("background-image", " url(" + $linkimg + ")");
            })
        // lay anh lam nen 2.0   
        $('.take-background ').each(
            function () {
                $linkimg = $(this).find('img.isbackground ').attr("src");
                //   console.log( $(this).parent().parent() );
                $(this).css("background-image", " url(" + $linkimg + ")");
            });

        // xoa san pham
        $('.buying-all').click(function () {
            if ($(this).is(':checked')) {
                // console.log('run');
                $('input[type="checkbox"].check-buying').prop('checked', true);
                $(this).prop('.buying-all', true);
            }
            else {
                // console.log('no run');
                $('input[type="checkbox"].check-buying').prop('checked', false);
                $(this).prop('.buying-all', false);
            }
        });
        // tick bo khong chon o nho thi o tat ca cung bo tick
        $('input[type="checkbox"].check-buying').click(function () {
            if (!$(this).is(':checked')) {
                $('.buying-all').prop('checked', false);
            }
        });
        // thay chu cho tria nhiem khach hang
        // $('.item-5-3.owl-carousel .owl-nav::before').html('run')
        // $('.item-5-3.owl-carousel').find('.owl-item.active:nth(2)').find('img').attr('data-ten-khach-hang')

        // xóa class theo cỡ màn hình
        if ($(window).width() >= 756) {
            $('[desk-remove-class]').removeClass($('[desk-remove-class]').attr('desk-remove-class'));
        };
        // click to show input radio
        $('input[type="radio"]').click(
            function () {
                // ẩn các khối khác       
                $('input[name=' + $(this).attr('name') + ']').each(
                    function () {
                        $blockId = $('#' + $(this).attr('data-block-id'));
                        // an khoi
                        $blockId.css('display', 'none');
                    }
                )
                // // tìm khối cần hiển thị
                $blockId = $('#' + $(this).attr('data-block-id'));
                // hiển thị khối 
                if ($(this).is(":checked")) {
                    // hiện thị khối theo id
                    $blockId.css('display', 'block');
                }
            }
        );
        // khi một nút click dc bấm
        $('.click-show').click(
            function () {
                // tìm khối cần hiển thị
                // kiểm tra tình trạng hiện, ẩn
                $blockId = $('.' + $(this).attr('data-block-class'));
                // console.log($(this).attr('data-block-id'));
                if ($blockId.css('display') == 'none') {
                    // hiện thị khối theo id
                    $blockId.css('display', 'block');
                }
                else {
                    $blockId.css('display', 'none');
                }
            }
        );
        $('.click-show-id').click(
            function () {
                // tìm khối cần hiển thị
                // kiểm tra tình trạng hiện, ẩn
                $blockId = $('#' + $(this).attr('data-block-id'));
                // console.log($blockId.css('display') == 'none');
                if ($blockId.css('display') == 'none') {
                    // hiện thị khối theo id
                    $blockId.css('display', 'block');
                }
                else {
                    $blockId.css('display', 'none');
                }
            }
        );
        // khi di chuot vào khối thì tắt windown listentd
        $('.ClickToShow,button,.click-show').mouseover(
            function () {
                // console.log('chuot hover button');
                $(window).off('mousedown');
            }
        );
        // khi một nút click dc bấm
        $('.ClickToShow , button,.click-show').mouseleave(
            function () {
                // console.log('chuot ben ngoai button');
                // khi di chuột    
                $(window).mousedown(
                    function () {
                        // console.log('chuot click');
                        $('.ClickToShow').css('display', 'none');
                    }
                );
            }
        );
        $('.small-to-big-window .smallWindown ').click(
            function () {
                var item = $(this).clone();
                $('.small-to-big-window  .bigWindown ').html(item);
            });
        // zoomOut khi ấn vào ảnh
        function zoomout() {
            // tao nen
            var blankcover = document.createElement("div");
            blankcover.classList.add('blankcover');
            // nen tu xoa
            $(blankcover).click(
                function () {
                    blankcover.remove();
                });
            // tao khung chua noi dung
            var container_content = document.createElement("div");
            container_content.classList.add('content');
            // lấy phần tử cần hiển thị
            var object = $(this).clone();
            $('body').append(blankcover);
            $('.blankcover').append(container_content);
            $('.blankcover .content').append(object);
        };
        //owl
        $('.item-1 ').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true
                }
            }
        });
        $('.SelecHeight').each(
            function () {
                var $id = $(this).attr('data-targer-height');
                $('#' + $id).on("load",
                    function () {
                        $('.SelecHeight').each(
                            function () {
                                var $id = $(this).attr('data-targer-height');
                                var $height = $('#' + $id).outerHeight();
                                $(this).outerHeight($height);
                            })
                            $('.height-equal').each(
                                function () {
                                    $number = $(this).find('.height-fit').length;
                                    $height = $(this).height() / $number;
                                    // console.log($height);
                                    $(this).find('.height-fit').each(
                                        function () {
                                            $(this).outerHeight($height);
                                        }
                                    )
                                }
                            );
                    }
                );
            }
        )
      
        $(window).resize(
            function () {
                $('.SelecHeight').each(
                    function () {
                        var $id = $(this).attr('data-targer-height');
                        var $height = $('#' + $id).outerHeight();
                        $(this).outerHeight($height);
                    }
                )
                $('.height-equal').each(
                    function () {
                        $number = $(this).find('.height-fit').length;
                        $height = $(this).height() / $number;
                        // console.log($height);
                        $(this).find('.height-fit').each(
                            function () {
                                $(this).outerHeight($height);
                            }
                        )
                    }
                );
            }
        )
        $('.Number-item').outerHeight(0);
        $('.item-3-1 ').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true
                },
                567: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
        $('.item-5-2 ').owlCarousel({
            loop: true,
            margin: 10,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 2,
                    loop: true
                },
                567: {
                    items: 3
                },
                768: {
                    items: 5
                }
            }
        });
        $('.item-5-2-noloop ').owlCarousel({
            loop: false,
            margin: 10,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 2,
                    loop: true
                },
                567: {
                    items: 3
                },
                768: {
                    items: 5
                }
            }
        });
        // $(" .item-5-3.owl-carousel .owl-nav button.owl-prev span").html("<i class='  fa fa-chevron-left'></i>");
        // $(" .item-5-3.owl-carousel .owl-nav button.owl-next span").html("<i class='  fa fa-chevron-right'></i>");            
        $('.item-2').owlCarousel({
            loop: true,
            margin: 5,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                567: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        });
        $('.item-4').owlCarousel({
            loop: false,
            margin: 5,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            nav: true,
            responsive: {
                0: {
                    items: 4
                },
                567: {
                    items: 4
                },
                992: {
                    items: 4
                }
            }
        });
        $('.item-8-2').owlCarousel({
            loop: false,
            margin: 0,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2
                },
                567: {
                    items: 8
                },
                992: {
                    items: 8
                }
            }
        });
        $(" .nav-bottom.owl-carousel .owl-nav button.owl-prev span").html(" Back");
        $(" .nav-bottom.owl-carousel .owl-nav button.owl-next span").html(" Next");

        // lan chuot owl
        var owl = $('.item-2');
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
        // owl navlink
        $('.item-auto').owlCarousel({
            loop: false,
            margin: 0,
            autoWidth: true,
            dots: true,
            nav: true,
        });
        // js for css            
        // clone height element    
        $('.SelecHeight').each(
            function () {
                var $id = $(this).attr('data-targer-height');
                var $height = $('#' + $id).height();
                $(this).outerHeight($height);
            }
        )
        $('.height-equal').each(
            function () {
                $number = $(this).find('.height-fit').length;
                $height = $(this).height() / $number;
                // console.log($height);
                $(this).find('.height-fit').each(
                    function () {
                        $(this).outerHeight($height);
                    }
                )
            }
        );
        // $(window).resize(
        //     function(){
        //         // console.log('run');
        //         $('.SelecHeight').each(
        //             function () {
        //                 var $id = $(this).attr('data-targer-height');
        //                 var $height = $('#' + $id).height();
        //                 $(this).outerHeight($height);
        //             }
        //         )
        //         $('.height-equal').each(
        //             function () {
        //                 $number = $(this).find('.height-fit').length;                
        //                 $height= $(this).height() / $number;
        //                 // console.log($height);
        //                 $(this).find('.height-fit').each(
        //                     function(){
        //                         $(this).outerHeight($height);
        //                     }
        //                 )
        //             }
        //         );
        //     }
        // )
        // button buying item
        $('.button-buy-item').each(
            function () {
                $(this).click(
                    function () {
                        $clone = $(this).clone();
                        $clone.attr('href', '/cart/');
                        $clone.addClass('slod');
                        $clone.removeClass('on-sale');
                        $(this).replaceWith($clone);
                    }
                )
            }
        )
    });
// function cho kich hoat
// mo cacte
// function openCity(evt, cityName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
// openCity(Event, 'all');