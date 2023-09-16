
var modes = document.querySelectorAll(".mode_toggle");
var indicator = document.getElementById('indicator');
var about = document.getElementById('about');
var projects = document.querySelectorAll('#aboutme');
var showabout = document.getElementById('showabout');
var closeabout = document.getElementById('closeabout');

// document.getElementsByClassName("load-wrapper").classList.add("hidden");
// $('.load-wrapper').classList.add("hidden");

// load animation

// load animation end

// navanimation scroll

var lastScroll = 0;

$(window).scroll(() => {
    var currentScroll = $(document).scrollTop();
    $('#home').addClass('navanimation');
    if ($(document).scrollTop() <= 10 && $('#home').hasClass('h-[5rem]') ) {
        // $('#home').removeClass('navanimation');
        $('#home').removeClass('h-[5rem]');
        $('#home').addClass('h-[9rem]');
        $('#home').css('box-shadow','none');
    }
    else  {
        $('#home').addClass('h-[5rem]');
        $('#home').addClass('backdrop-blur');
    }
    if(currentScroll > lastScroll && !$('#home').hasClass('scroll-up')){
        $('#home').addClass('scroll-up');
        $('#home').removeClass('scroll-down');
    }
    if(currentScroll < lastScroll && $('#home').hasClass('scroll-up')) {
        $('#home').addClass('scroll-down');
        $('#home').removeClass('scroll-up');
    }
    lastScroll = currentScroll;
})

$(window).on('load', function () {
setTimeout(function () {
    $('.load-wrapper').fadeToggle('hidden');
}, 5000)
});

$('#about').on('click', function () {
    $('#showabout').fadeToggle('hidden');
})

$('#aboutmob').on('click', function () {
    $('#showabout').fadeToggle('hidden');
})

$('#closeabout').on('click', function () {
    $('#showabout').fadeToggle('hidden');
})

$('#modedesktop').attr('src', "./assets/icons/modes/moon_dark.png");
$('#modephone').attr('src', "./assets/icons/modes/moon_dark.png");
modes.forEach(function (element) {
element.addEventListener('click', function () {
    if (document.documentElement.classList.contains('dark'))
    {
        document.documentElement.classList.remove('dark');
        $('#modedesktop').attr('src', "./assets/icons/modes/light_mode.png");
        $('#modephone').attr('src', "./assets/icons/modes/light_mode.png");
        $('.menu').css('background-color', "black");
    }
    else {
        document.documentElement.classList.add('dark');
        $('#modedesktop').attr('src', "./assets/icons/modes/moon_dark.png");
        $('#modephone').attr('src', "./assets/icons/modes/moon_dark.png");
        $('.menu').css('background-color', "white");

    }
})    
})


// const initpoi = indicator.getBoundingClientRect().bottom;
// console.log(initpoi);
var change = 923*2;
window.addEventListener('scroll', () => {
    var poi = indicator.getBoundingClientRect().bottom;
    var abtme = document.getElementById("aboutme");
    var diff = change - poi;
    abtme.style.transform = "translateX("+(diff-990) +"px)"; 

})
window.addEventListener('scroll', reveal)



function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    for (var i = 0; i < reveals.length; i++) {
        var winh = window.innerHeight;
        var eleh = reveals[i].getBoundingClientRect().top;
        var revh = 130;
        
        if (eleh < winh - revh) {
            reveals[i].classList.add('activate');
        }
        else {
            reveals[i].classList.remove('activate');
        }
    }
}

// function openabout() {
//     showabout.classList.remove('hidden');
//     console.log("manoj");
// }




// setInterval(() => {
//     var reveals=document.querySelector('.reveal');
//    console.log(reveals.getBoundingClientRect().top) 
// }, 2000);

$('#mobilenav:contains(hidden)').addClass('');

function openmobilemenu() {
    
    if (document.documentElement.classList.contains('dark')) {
            $('.menu').css('background-color', "white");
    }
    else{
        if($('#mobilenav').css('display') == "none"){
            $('.menu').css('background-color', "white");
        }
        else{
            $('.menu').css('background-color', "black");
        }
    }
    $('#one').toggleClass('oneanimation');
    $('#two').toggleClass('twoanimation');
    $('#three').toggleClass('threeanimation');
    $('#mobilenav').fadeToggle('hidden');
}



function textcolor(colorcode) {
    document.getElementById('gallery').style.color = colorcode;
}

$('#top-button').hide();

$(document).scroll(function () {
    if ($(this).scrollTop() > 200){
        $('#top-button').fadeIn();
    }
    else {
        $('#top-button').fadeOut();
    }
    
})

$('#top-button').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 10, 'swing');
})

var timeout;
window.addEventListener('mousemove', (e) => {
    $('#purpleball').addClass('md:visible');
    $('#purpleball').removeClass('md:invisible');
    $('#purpleball').css('transform', 'translate(' + e.clientX + 'px,' + e.clientY + 'px)');
    $('#purpleballinner').css('transform','scale(1.8)');
    $('#purpleballinner').css('transform','scale(1.8)');
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        $('#purpleballinner').css('transform','scale(1)');
        $('#purpleballinner').css('transform','scale(1)');
    },100)

})

$('#sayhellobutton').click(() => {
    $('#messageinput').val('Hello .');
    
})


// loading animation from after effects
var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'data.json'
});


// project slider left right
const sliders = document.querySelectorAll('.lrslider');
const slideContainer = document.querySelector('.slidecontainer');
const slideContainerr = document.querySelector('.wrapper');
const firstImage = document.querySelector('.firstimage');
const lastImage = document.querySelector('.lastimage');


firstImageWidth = firstImage.clientWidth+8;
lastImageWidth = lastImage.clientWidth;


sliders[0].addEventListener('click',(e)=>{
    slideContainerr.style.transform += `translateX(${firstImageWidth}px)`;
})

sliders[1].addEventListener('click',(e)=>{
    slideContainerr.style.transform += `translateX(-${firstImageWidth}px)`;
})

// initially keeping the left button of slideer hidden
sliders[0].style.display = "none";

sliders[1].addEventListener("click",()=>{
    sliders[1].classList.toggle('pointer-events-none');
    setTimeout(()=>{
        sliders[1].classList.toggle('pointer-events-none');
    },700)
    sliders[1].style.display = Math.ceil(lastImage.getBoundingClientRect().right-firstImageWidth)<Math.ceil(slideContainer.getBoundingClientRect().right) ? "none" : 'flex';
    sliders[0].style.display = 'flex';

})

sliders[0].addEventListener('click',()=>{
    sliders[0].classList.toggle('pointer-events-none');
    setTimeout(()=>{
        sliders[0].classList.toggle('pointer-events-none');
    },700)
    sliders[0].style.display = Math.ceil(firstImage.getBoundingClientRect().left)+firstImageWidth == Math.ceil(slideContainer.getBoundingClientRect().left) ? "none" : 'flex';
    sliders[1].style.display = 'flex';
})

// scroll animation on projects i think
var projectItems = document.querySelectorAll(".project");
console.log(projectItems)
window.addEventListener('scroll',()=>{
    var winHeight = window.innerHeight/5*4;
    projectItems.forEach(box => {
        // console.log(box.getBoundingClientRect().top,winHeight)
        if(box.getBoundingClientRect().top < winHeight){
            box.classList.remove("translate-y-10"); 
            box.classList.add("translate-y-0"); 
            box.classList.remove("opacity-0"); 
            box.classList.add("opacity-100"); 
        }else{
            box.classList.remove("translate-y-0"); 
            box.classList.add("translate-y-10"); 
            box.classList.remove("opacity-100"); 
            box.classList.add("opacity-0");
        }
    })

})

const manoj1 = document.querySelectorAll(".manoj1>*");
const manoj2 = document.querySelectorAll(".manoj2>*");
console.log(manoj1)


let changeText1 = ()=>{
manoj1.forEach((a)=>{
    a.classList.add("scale-y-0");
})
manoj2.forEach((b)=>{
    b.classList.add("scale-y-100");
})
setTimeout(changeText2,2000);
}

let changeText2 = ()=>{
manoj1.forEach((c)=>{
    c.classList.remove("scale-y-0");
})
manoj2.forEach((d)=>{
    d.classList.remove("scale-y-100");
    // d.classList.add("scale-y-0");
})
}

const textRollInterval = setInterval(changeText1,3000);

// w = $(window);
// b = $('body');
// c = $('.bodycontainer');

// $(document).ready(function() {

// 	w.scroll(function() {
// 		c.css('transform','translateY(' + -w.scrollTop() + 'px)');
// 	});

// });

// custom tailwind config
tailwind.config = {
    darkMode: 'class',
    theme: {
        screens: {
          sm: '640px',
          md: '768px',
          xl: '1024px',
          lg: '1282px',
          '2xl': '1536px',
        },
        keyframes: {
        bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
        },
       },
        spin: {
            to: {
            transform: 'rotate(360deg)',
            },
        },
        ping: {
            '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
            },
        },
        pulse: {
            '50%': {
            opacity: '.5',
            },
            },
        colorhue: {
            
            '50%': {
                color: 'rgb(130,255,120) '
            }
            },
        top: {
            from: {
            transform: 'translateY(100%)'
            },
            to: {
            transform: 'translateY(-100%)'
        }
            },
            redballanimation: {
                '0%': {
                  transform:'translate(0%,0%);'  
                },
                '40%': {
                  transform:'translate(100%,0%);'  
                },'70%': {
                  transform:'translate(50%,-100%);'  
                    
                },'100%': {
                  transform:'translate(0%,0%);'  

                },
            
        }
        },
        animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        colorhue: 'colorhue 2s infinite',  
        top: ' top 1s infinite cubic-bezier(.11,.77,.86,.19)',
        redballanimation: 'redballanimation 8s infinite '
        },
        fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
        '"Poppins"',
      ],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
        extend: {
          colors: {
                back: '#0a090f',
                secondary: '#EAEAEA',
                sidetriangle: '#4D4D4D',
                m: '#FEE715FF ',
                n: '#00FFFF',
                o: '#AA96DA',
                j: '#C5FAD5',
                whiteop: 'rgba(255, 250, 250, 0.068)',
          }
            },
             letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
                normal: '0em',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
                morewider: '0.4em',
            },
                spacing: {
                px: '1px',
                0: '0px',
                0.5: '0.125rem',
                1: '0.25rem',
                1.5: '0.375rem',
                2: '0.5rem',
                2.5: '0.625rem',
                3: '0.75rem',
                3.5: '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                11: '2.75rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
                44: '11rem',
                48: '12rem',
                52: '13rem',
                56: '14rem',
                60: '15rem',
                64: '16rem',
                72: '18rem',
                80: '20rem',
                96: '24rem',
                200: '60rem',
                300: '70rem'
            },
            rotate: {
                0: '0deg',
                1: '1deg',
                2: '2deg',
                3: '3deg',
                6: '6deg',
                12: '12deg',
                45: '45deg',
                90: '90deg',
                180: '180deg',
                trotate: '36deg',
            },
             inset: ({ theme }) => ({
                auto: 'auto',
                ...theme('spacing'),
                '1/2': '30%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                 '3/4': '75%',

                 full: '100%',
                tposl: '45%'
          }),
                height: ({ theme }) => ({
                auto: 'auto',
                ...theme('spacing'),
                '1/2': '50%',
                '1/3': '33.333333%',
                '2/3': '66.666667%',
                '1/4': '25%',
                '2/4': '50%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '2/6': '33.333333%',
                '3/6': '50%',
                '4/6': '66.666667%',
                '5/6': '83.333333%',
                full: '100%',
                screen: '100vh',
                min: 'min-content',
                max: 'max-content',
                    fit: 'fit-content',
                    '90':  '90%',
                }),
      }
    }