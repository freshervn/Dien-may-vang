// html
// <div class="owl-carousel owl-theme">
//     <div class="item"><h4>1</h4></div>
// </div>

// js
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$(document).ready(
    function(){
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
        // $(" .item-5-3.owl-carousel .owl-nav button.owl-prev span").html("<i class='	fa fa-chevron-left'></i>");
        // $(" .item-5-3.owl-carousel .owl-nav button.owl-next span").html("<i class='	fa fa-chevron-right'></i>");            
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
            loop: true,
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
            loop: true,
            margin: 5,
            autoWidth: true,
            dots: true,
            nav: true,
        });
    }
)