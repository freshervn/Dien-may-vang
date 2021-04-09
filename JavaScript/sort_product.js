$(document).ready(function () {// lấy số lượng class  phải sắp xếp 


	// nút để kích hoặt xắp xếp
	$('.sort-product').click(function () {
		var method = $(this).attr('data-funtion-name');
		window.settings = {
			/* [..] Other settings */
			functionName: method
			/* , [..] More settings */
		};
		eval(settings.functionName + '()');
	})
	// trương trình xắp xếp
	function sortpricelowtoheight() {
		$(".wrapBoxProduct").each(
			function (index, ele) {
				var price = $(this).find('.price');
				var i=j=0, len = price.length;
				
				for (i = 0; i < len - 1; i++) {
					// console.log(i);
					for (var j = 0; j < len - i -1 ; j++) {
						// console.log(j);
						// console.log($(this));
						price = $(this).find('.price');
						if (Number($(this).find('.price')[j+1].getAttributeNode('data-price').value) > Number ($(this).find('.price')[j].getAttributeNode('data-price').value)) {
							continue;
						}
						else {
							var temp = $(this).find('.price')[j].parentElement.parentElement.parentElement.parentElement.cloneNode(true);
							$(this).find('.price')[j].parentElement.parentElement.parentElement.parentElement.replaceWith($(this).find('.price')[j + 1].parentElement.parentElement.parentElement.parentElement.cloneNode(true));
							$(this).find('.price')[j + 1].parentElement.parentElement.parentElement.parentElement.replaceWith(temp);
						}
					}
				}
			});
			
	}


	function sortpriceheighttolow() {
		$(".wrapBoxProduct").each(
			function (index, ele) {
				var price = $(this).find('.price');
				var i=j=0, len = price.length;
				
				for (i = 0; i < len - 1; i++) {
					// console.log(i);
					for (var j = 0; j < len - i -1 ; j++) {
						// console.log(j);
						// console.log($(this));
						price = $(this).find('.price');
						if (Number($(this).find('.price')[j+1].getAttributeNode('data-price').value) < Number ($(this).find('.price')[j].getAttributeNode('data-price').value)) {
							continue;
						}
						else {
							var temp = $(this).find('.price')[j].parentElement.parentElement.parentElement.parentElement.cloneNode(true);
							$(this).find('.price')[j].parentElement.parentElement.parentElement.parentElement.replaceWith($(this).find('.price')[j + 1].parentElement.parentElement.parentElement.parentElement.cloneNode(true));
							$(this).find('.price')[j + 1].parentElement.parentElement.parentElement.parentElement.replaceWith(temp);
						}
					}
				}
			});
	}

	function sort_default() {
		window.location.href = window.location.href
	}


});
