(function ($) {
    "use strict";

///////////////////////////////////////////////////////

// Preloader
$(".preloader").delay(800).fadeOut("slow");

// Preloader End


// Menu

jQuery(document).ready(function () {
	jQuery('header .mainmenu').meanmenu({
    meanScreenWidth: "992",
  });
});


document.querySelectorAll('.menu-anim > li > a').forEach(button => button.innerHTML = '<div class="menu-text"><span>' + button.textContent.split('').join('</span><span>') + '</span></div>');

setTimeout(() => {
  var menu_text = document.querySelectorAll(".menu-text span");
  menu_text.forEach((item) => {
      var font_sizes = window.getComputedStyle(item, null);
      let font_size = font_sizes.getPropertyValue("font-size");
      let size_in_number = parseInt(font_size.replace("px", ""), 10);
      let new_size = parseInt(size_in_number / 3, 10);
      new_size = new_size + "px";
      if (item.innerHTML === " ") {
          item.style.width = new_size;
      }
  });
}, 1000);

// Menu End


// Search Start
document.addEventListener("click", (event) => {
  const searchToggle = event.target.closest(".search-icon");
  if (searchToggle) {
    searchToggle.classList.toggle("active");
  }
});
// Search End


///////////////////////////////////////////////////////
// Sticky Menu
$(window).on( 'scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $(".menu-area").addClass("sticky");
    } else {
        $(".menu-area").removeClass("sticky");
    }
});
// Sticky Menu End


///////////////////////////////////////////////////////
// Magnific Popup gallery
$('.popup-gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    gallery: {
        enabled: true
    },
    type: 'image'
    // other options
});

$('.popup-youtube').magnificPopup({
  type: 'iframe'
});


$("a.vid").YouTubePopUp();

// Magnific Popup gallery End


/*Trending Slide*/

var resourcesSlider = new Swiper('.resources-slider', {
  slidesPerView: 3,
  spaceBetween: 15,
  loop:true,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView:3
    }
  },
  navigation: {
    nextEl: ".resources-button-next",
    prevEl: ".resources-button-prev",
  },
});


/* Testimonial */

//top
var testimonial_top_slider = new Swiper('.testimonial-slide-top', {
  spaceBetween: 24,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});

// Bottom
var testimonial_bottom_slider = new Swiper('.testimonial-slide-bottom', {
  spaceBetween: 24,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 1,
    reverseDirection: true
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});


// Testimonial Image Generator
var testimonialImg = new Swiper('.testimonial-img-slide', {
  fadeEffect: { crossFade: true },
  effect: 'fade',
  loop: true,
  allowTouchMove : false,
})
  
var testimonialInfo = new Swiper('.testimonial-info-slide', {
spaceBetween: 24,
slidesPerView: 1,
loop: true,
speed: 800,
allowTouchMove : false,
navigation: {
  nextEl: ".testimonial-info-button-next",
  prevEl: ".testimonial-info-button-prev",
},
pagination: {
  el: ".testimonial-info-pagination",
  clickable: true,
},
thumbs: {
  swiper: testimonialImg
}
});


var cg_testimonialSlider = new Swiper('.cg-testimonial-slide', {
  slidesPerView: 3,
  spaceBetween: 15,
  loop:true,
  speed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView:3
    }
  },
  navigation: {
    nextEl: ".cg-testimonial-info-button-next",
    prevEl: ".cg-testimonial-info-button-prev",
  },
  pagination: {
    el: ".cg-testimonial-info-pagination",
    clickable: true,
  },
  });

/* Testimonial End */


/* Brand */

var brand_slider = new Swiper('.brand-slide-wrap', {
  spaceBetween: 100,
  centeredSlides: true,
  speed: 5000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true,
  breakpoints: {
    320: {
      spaceBetween: 50,
    },
    992: {
      spaceBetween: 70,
    }
  },
});

/* Brand End */


///////////////////////////////////////////////////////
//Mixitup
$('.work-mixi').mixItUp();



///////////////////////////////////////////////////////
// Bottom to top start
$(document).ready(function () {
  $(window).on('scroll', (function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  }));
  $('#scroll-top').on( 'click', function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
// Bottom to top End



///////////////////////////////////////////////////////
// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
        for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll('.odometer')[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});


window.onload = function () {

  // Custom Cursor
  const cursor = document.querySelector('.cursor');

  if (cursor) {
    const editCursor = e => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };
    window.addEventListener('mousemove', editCursor);

    document.querySelectorAll("a, .cursor-pointer").forEach(item => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-active');
      });

      item.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-active');
      });
    });
  }
};

// Custom Cursor End


// Select2
$('.select2').select2({
    minimumResultsForSearch: Infinity,
});


// Pricing Toggle

const tableWrapper = document.querySelector(".price_wrapper");
const switchInputs = document.querySelectorAll(".switch-wrapper input");
const prices = tableWrapper?.querySelectorAll(".price");
const toggleClass = "hide";

for (const switchInput of switchInputs) {
  switchInput.addEventListener("input", function () {
    for (const price of prices) {
      price.classList.add(toggleClass);
    }
    const activePrices = tableWrapper.querySelectorAll(
      `.price.${switchInput.id}`
    );
    for (const activePrice of activePrices) {
      activePrice.classList.remove(toggleClass);
    }
  });
}

// Pricing Toggle End



// Flowmap
if( !location.hostname == '' ){
var vertex = `
		attribute vec2 uv;
		attribute vec2 position;
		varying vec2 vUv;
		void main() {
				vUv = uv;
				gl_Position = vec4(position, 0, 1);
		}
`;
var fragment = `
		precision highp float;
		precision highp int;
		uniform sampler2D tWater;
		uniform sampler2D tFlow;
		uniform float uTime;
		varying vec2 vUv;
		uniform vec4 res;
		uniform vec2 img;

		vec2 centeredAspectRatio(vec2 uvs, vec2 factor){
				return uvs * factor - factor /2. + 0.5;
		}

		void main() {

			// R and G values are velocity in the x and y direction
			// B value is the velocity length
			vec3 flow = texture2D(tFlow, vUv).rgb;

			vec2 uv = .5 * gl_FragCoord.xy / res.xy ;

			// vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
			vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
			myUV -= flow.xy * (0.15 * 1.2);

			vec2 myUV2 = (uv - vec2(0.5))*res.zw + vec2(0.5);
			myUV2 -= flow.xy * (0.125 * 1.2);

			vec2 myUV3 = (uv - vec2(0.5))*res.zw + vec2(0.5);
			myUV3 -= flow.xy * (0.10 * 1.4);

			vec3 tex = texture2D(tWater, myUV).rgb;
			vec3 tex2 = texture2D(tWater, myUV2).rgb;
			vec3 tex3 = texture2D(tWater, myUV3).rgb;

			gl_FragColor = vec4(tex.r, tex2.g, tex3.b, 1.0);
		}
`;
{
	var _size = [2046, 1638];
	var renderer = new ogl.Renderer({ dpr: 2 });
	var gl = renderer.gl;
  var heroElement = document.querySelector('.hero-area-canvas');
	heroElement?.appendChild(gl.canvas);
  

	// Variable inputs to control flowmap
	var aspect = 1;
	var mouse = new ogl.Vec2(-1);
	var velocity = new ogl.Vec2();
	function resize() {
		gl.canvas.width = window.innerWidth * 2.0;
		gl.canvas.height = window.innerHeight * 2.0;
		gl.canvas.style.width = window.innerWidth + "px";
		gl.canvas.style.height = window.innerHeight + "px";

		var a1, a2;
		var imageAspect = _size[1] / _size[0];
		if (window.innerHeight / window.innerWidth < imageAspect) {
			a1 = 1;
			a2 = window.innerHeight / window.innerWidth / imageAspect;
		} else {
			a1 = window.innerWidth / window.innerHeight * imageAspect;
			a2 = 1;
		}
		mesh.program.uniforms.res.value = new ogl.Vec4(
			window.innerWidth,
			window.innerHeight,
			a1,
			a2
		);

		renderer.setSize(window.innerWidth, window.innerHeight);
		aspect = window.innerWidth / window.innerHeight;
	}
	var flowmap = new ogl.Flowmap(gl, {
		falloff: 0.8,
		dissipation: 0.92,
		alpha: 0.9
	});
	// Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
	var geometry = new ogl.Geometry(gl, {
		position: {
			size: 2,
			data: new Float32Array([-1, -1, 3, -1, -1, 3])
		},
		uv: { size: 2, data: new Float32Array([0, 0, 2, 0, 0, 2]) }
	});
	var texture = new ogl.Texture(gl, {
		minFilter: gl.LINEAR,
		magFilter: gl.LINEAR
	});
	var img = new Image();
	img.onload = () => (texture.image = img);
	img.crossOrigin = "Anonymous";
	img.src = "/assets/images/hero-bg-canvas.png"
  
	var a1, a2;
	var imageAspect = _size[1] / _size[0];
	if (window.innerHeight / window.innerWidth < imageAspect) {
		a1 = 1;
		a2 = window.innerHeight / window.innerWidth / imageAspect;
	} else {
		a1 = window.innerWidth / window.innerHeight * imageAspect;
		a2 = 1;
	}

	var program = new ogl.Program(gl, {
		vertex,
		fragment,
		uniforms: {
			uTime: { value: 0 },
			tWater: { value: texture },
			res: {
				value: new ogl.Vec4(window.innerWidth, window.innerHeight, a1, a2)
			},
			img: { value: new ogl.Vec2(_size[1], _size[0]) },
			// Note that the uniform is applied without using an object and value property
			// This is because the class alternates this texture between two render targets
			// and updates the value property after each render.
			tFlow: flowmap.uniform
		}
	});
	var mesh = new ogl.Mesh(gl, { geometry, program });

	window.addEventListener("resize", resize, false);
	resize();

	// Create handlers to get mouse position and velocity
	var isTouchCapable = "ontouchstart" in window;
	if (isTouchCapable) {
		window.addEventListener("touchstart", updateMouse, false);
		window.addEventListener("touchmove", updateMouse, { passive: false });
	} else {
		window.addEventListener("mousemove", updateMouse, false);
	}
	var lastTime;
	var lastMouse = new ogl.Vec2();
	function updateMouse(e) {
		e.preventDefault();
	
		if (e.changedTouches && e.changedTouches.length) {
			e.x = e.changedTouches[0].pageX;
			e.y = e.changedTouches[0].pageY;
		}
		if (e.x === undefined) {
			e.x = e.pageX;
			e.y = e.pageY;
		}
		// Get mouse value in 0 to 1 range, with y flipped
		mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);
		// Calculate velocity
		if (!lastTime) {
			// First frame
			lastTime = performance.now();
			lastMouse.set(e.x, e.y);
		}

		var deltaX = e.x - lastMouse.x;
		var deltaY = e.y - lastMouse.y;

		lastMouse.set(e.x, e.y);

		var time = performance.now();

		// Avoid dividing by 0
		var delta = Math.max(10.4, time - lastTime);
		lastTime = time;
		velocity.x = deltaX / delta;
		velocity.y = deltaY / delta;
		// Flag update to prevent hanging velocity values when not moving
		velocity.needsUpdate = true;
	}
	requestAnimationFrame(update);
	function update(t) {
		requestAnimationFrame(update);
		// Reset velocity when mouse not moving
		if (!velocity.needsUpdate) {
			mouse.set(-1);
			velocity.set(0);
		}
		velocity.needsUpdate = false;
		// Update flowmap inputs
		flowmap.aspect = aspect;
		flowmap.mouse.copy(mouse);
		// Ease velocity input, slower when fading out
		flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1);
		flowmap.update();
		program.uniforms.uTime.value = t * 0.01;
		renderer.render({ scene: mesh });
	}
}

}

// Flowmap End


//Text Animation
let splitTextLines = gsap.utils.toArray(".text-anim");

splitTextLines.forEach(splitTextLine => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: splitTextLine,
      start: 'top 90%',
      duration: 2,
      end: 'bottom 60%',
      scrub: false,
      markers: false,
      toggleActions: 'play none none none'
    }
  });

  const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
  gsap.set(splitTextLine, { perspective: 400 });
  itemSplitted.split({ type: "lines" })
  tl.from(itemSplitted.lines, { duration: .9, delay: 0.2, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
});



}(jQuery)); 

