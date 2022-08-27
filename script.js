
var modes = document.getElementById("mode_toggle");
var indicator = document.getElementById('indicator')

// document.getElementsByClassName("load-wrapper").classList.add("hidden");
// $('.load-wrapper').classList.add("hidden");

// load animation

// load animation end

modes.addEventListener('click', function () {

    if (document.documentElement.classList.contains('dark'))
    {
        document.documentElement.classList.remove('dark');
    }
    else {
        document.documentElement.classList.add('dark');
    }
})

// const initpoi = indicator.getBoundingClientRect().bottom;
// console.log(initpoi);
var change = 923*2;
window.addEventListener('scroll', () => {
    var poi = indicator.getBoundingClientRect().bottom;
    var abtme = document.getElementById("aboutme");
    console.log(( 923*3)-poi);
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


// setInterval(() => {
//     var reveals=document.querySelector('.reveal');
//    console.log(reveals.getBoundingClientRect().top) 
// }, 2000);










// custom tailwind config
tailwind.config = {
    darkMode: 'class',
      theme: {
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