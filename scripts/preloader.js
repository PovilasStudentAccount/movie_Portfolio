var loader = document.getElementById("preloader");
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


// store first time visit in session

let data = sessionStorage.getItem('visited', false);

//end of session storage


//Preloader


window.addEventListener("load", function(){
    loader.style.display = "none";

    //Remove the line under the comment when using the intro animation.

    // intro.style.top = '-100vh'
    
    //The intro animation, currently under development

    

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2300)

    })

    sessionStorage.setItem('visited', true);

})


