// function magnify(imgID, zoom) {
//     var img, glass, w, h, bw;
//     img = document.getElementById(imgID);

//     /*create magnifier glass:*/
//     glass = document.createElement("DIV");
//     glass.setAttribute("class", "img-magnifier-glass");
//     /*insert magnifier glass:*/
//     img.parentElement.insertBefore(glass, img);
//     /*set background properties for the magnifier glass:*/
//     glass.style.backgroundImage = "url('" + img.src + "')";
//     glass.style.backgroundRepeat = "no-repeat";
//     glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
//     bw = 0;
//     h = glass.offsetHeight / 2;
//     w = glass.offsetWidth / 2;

//     /*execute a function when someone moves the magnifier glass over the image:*/
//     glass.addEventListener("mousemove", moveMagnifier);
//     img.addEventListener("mousemove", moveMagnifier);
//     /*and also for touch screens:*/
//     glass.addEventListener("touchmove", moveMagnifier);
//     img.addEventListener("touchmove", moveMagnifier);

//     function moveMagnifier(e) {
//         var pos, x, y;
//         /*prevent any other actions that may occur when moving over the image*/
//         e.preventDefault();
//         /*get the cursor's x and y positions:*/
//         pos = getCursorPos(e);
//         x = pos.x;
//         y = pos.y;
//         /*prevent the magnifier glass from being positioned outside the image:*/
//         if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
//         if (x < w / zoom) { x = w / zoom; }
//         if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
//         if (y < h / zoom) { y = h / zoom; }
//         /*set the position of the magnifier glass:*/
//         glass.style.left = (x - w) + "px";
//         glass.style.top = (y - h) + "px";
//         /*display what the magnifier glass "sees":*/
//         glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
//     }
//     function getCursorPos(e) {
//         e = e || window.event;
//         var a, x = e.clientX, y = e.clientY;
//         /*get the x and y positions of the image:*/
//         a = img.getBoundingClientRect();
//         /*calculate the cursor's x and y coordinates, relative to the image:*/
//         x = e.pageX - a.left;
//         y = e.pageY - a.top;
//         // console.log(e.clientX);
//         /* Consider any page scrolling: */
//         x = x - window.pageXOffset;
//         y = y - window.pageYOffset;
//         return { x: x, y: y };
//     }
// }
// $(document).ready(
//     function () {
//         var imgId = 'zoomimg';
//         // lay ty le zoom 
//         var ScaleZoom = 2;
//         $('.product .img-product').mouseenter(
//             function () {
//                 // dat id cho anh can zoom        
//                 // tim anh va dat id cho no
//                 $(this).find('img').attr('id', imgId);
//                 $(this).find('#' + imgId).parent().addClass('img-magnifier-container');
//                 // console.log('on');
//                 magnify(imgId, ScaleZoom);
//                 $(this).mouseleave(
//                     function () {
//                         $(this).find('.img-magnifier-glass').remove();
//                         $(this).find('#' + imgId).parent().removeClass('img-magnifier-container');
//                         $(this).find('#' + imgId).attr('id', '');
//                         // console.log('off');
//                     }
//                 )
//             }         
//         )
      
// });
// // zoom img