$(document).ready(function(){  

	$('.header_slider').slick({
		infinite: true,
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		prevArrow: '<div class="slick-prev slick-arrow" aria-label="Previous" style=""><span class="icon-caret-left"></span></div>',
		nextArrow:'<div class="slick-next slick-arrow" aria-label="Next" style=""><span class="icon-caret-right"></span></div>',
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 500,
		responsive: [
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 5,
		      slidesToScroll: 1,
		      arrows: true,
		    }
		  },
		  {
		    breakpoint: 577,
		    settings: {
		      slidesToShow: 3,
		      slidesToScroll: 1,
		      arrows: true,
		    }
		  },
		]
	});
	

	let sortActive = document.querySelector('.cards_sort_active');
	let list = document.querySelector('.cards_sort_list');
	let body = document.querySelector('body');

	sortActive.onclick = () => {
		console.log('clik')
		list.style.maxHeight = list.scrollHeight + 'px';
		for(let item of list.children) {
			item.addEventListener('click', () => {
				console.log(item.innerHTML)
				sortActive.innerHTML = item.innerHTML + '<span class="icon-chevron-down"></span>';
				list.style.maxHeight = '0px';
			})
		}
	}

	body.onclick = (e) => {
		if(!e.target.closest('.cards_sort')) {
			list.style.maxHeight = null;
		}
	}
	
});


