console.clear();

$(function() {
  var menu = $(".pc-top-bar-wrap .headerM2").offset().top;
  $(window).scroll(function() {
    var window = $(this).scrollTop();
    if(menu <= window) {
      $(".pc-top-bar-wrap .headerM2").addClass("fixed");
    }else{
      $(".pc-top-bar-wrap .headerM2").removeClass("fixed");
    }
  })
});

function showTab(tabId, clickedTab) {
	// Remove "active" class from all tabs
	$(".tab").removeClass("active");

	// Hide all tabs
	$(".video-tab-box .video-box").hide();

	// Show the selected tab
	$("#" + tabId).show();

	// Add "active" class to the clicked tab
	$(clickedTab).addClass("active");
}

$(document).ready(function () {
	$("#open-popup-btn").click(function () {
		$("#anbu-popup-box").fadeIn();
	});

	// 닫기 버튼 클릭 시 팝업 닫기
	$("#close-btn").click(function () {
		$("#anbu-popup-box").fadeOut();
	});

	// 팝업 외부를 클릭하면 팝업 닫기
	$(document).on("click", function (event) {
		if ($(event.target).is("#anbu-popup-box")) {
			$("#anbu-popup-box").fadeOut();
		}
	});
});

function PcMilkSwiper__init() {
	const swiper = new Swiper(
		".sec-3 .sec-3-wrap .milk-wrap .mink-slides .swiper",
		{
			// Optional parameters
			loop: false,
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 10,

			pagination: {
				el: ".mink-slides .milk-swiper-btn .swiper-pagination",
				clickable: true
			}
		}
	);
}

PcMilkSwiper__init();

$(document).ready(function () {
	$(".tab-btn").click(function () {
		$(".tab-btn.on").removeClass("on");
		$(".tab-content.on").removeClass("on");

		$(this).addClass("on");

		var contentId = $(this).index() + 1;
		$("#content" + contentId).addClass("on");
	});
});

function PcStory1Swiper__init() {
	const swiper = new Swiper(
		".sec-4 .sec-4-wrap .sec-4-story .tab-con-1 .swiper",
		{
			loop: false,
			autoplay: {
				delay: 3000
			},
			centeredSlides: true,

			pagination: {
				el: ".tab-con-1 .tab-con-1-swiper-btn .swiper-pagination",
				clickable: true
			},

			navigation: {
				nextEl: ".tab-con-1-swiper-btn .swiper-button-next",
				prevEl: ".tab-con-1-swiper-btn .swiper-button-prev"
			}
		}
	);
}

PcStory1Swiper__init();

function PcStory2Swiper__init() {
	const swiper = new Swiper(
		".sec-4 .sec-4-wrap .sec-4-story .tab-con-2 .swiper",
		{
			loop: false,
			autoplay: {
				delay: 3000
			},
			centeredSlides: true,

			pagination: {
				el: ".tab-con-2 .tab-con-2-swiper-btn .swiper-pagination",
				clickable: true
			},

			navigation: {
				nextEl: ".tab-con-2-swiper-btn .swiper-button-next",
				prevEl: ".tab-con-2-swiper-btn .swiper-button-prev"
			}
		}
	);
}

PcStory2Swiper__init();

function PcStory3Swiper__init() {
	const swiper = new Swiper(
		".sec-4 .sec-4-wrap .sec-4-story .tab-con-3 .swiper",
		{
			loop: false,
			autoplay: {
				delay: 3000
			},
			centeredSlides: true,

			pagination: {
				el: ".tab-con-3 .tab-con-3-swiper-btn .swiper-pagination",
				clickable: true
			},

			navigation: {
				nextEl: ".tab-con-3-swiper-btn .swiper-button-next",
				prevEl: ".tab-con-3-swiper-btn .swiper-button-prev"
			}
		}
	);
}

PcStory3Swiper__init();

function PcStory4Swiper__init() {
	const swiper = new Swiper(
		".sec-4 .sec-4-wrap .sec-4-story .tab-con-4 .swiper",
		{
			loop: false,
			autoplay: {
				delay: 3000
			},
			centeredSlides: true,

			pagination: {
				el: ".tab-con-4 .tab-con-4-swiper-btn .swiper-pagination",
				clickable: true
			},

			navigation: {
				nextEl: ".tab-con-4-swiper-btn .swiper-button-next",
				prevEl: ".tab-con-4-swiper-btn .swiper-button-prev"
			}
		}
	);
}

PcStory4Swiper__init();

function PcSupportSwiper__init() {
	const swiper = new Swiper(
		".sec-5 .sec-5-wrap .sec-5-2 .support-slides .swiper",
		{
			// Optional parameters
			loop: false,
			slidesPerView: 8,
			slidesPerGroup: 8,
			spaceBetween: 10,

			pagination: {
				el: ".support-slides .support-swiper-btn .swiper-pagination",
				clickable: true
			}
		}
	);
}

PcSupportSwiper__init();

function PcMainpSwiper__init() {
	const swiper = new Swiper(
		".main-popup-box .popup-wrap .letter-box .swiper",
		{
			loop: false,

			navigation: {
				nextEl: ".letter-swiper-btn .swiper-button-next",
				prevEl: ".letter-swiper-btn .swiper-button-prev"
			}
		}
	);
}

PcMainpSwiper__init();

$(document).ready(function () {
  $("#today-close").click(function () {
    $("#main-popup-box, #main-popup-bg").fadeOut();
  });

  $(document).on("click", function (event) {
    if ($(event.target).is("#main-popup-box, #main-popup-bg")) {
      $("#main-popup-box, #main-popup-bg").fadeOut();
    }
  });
});
