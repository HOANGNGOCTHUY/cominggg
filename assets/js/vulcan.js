// Bars menu

const hambuger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.header-menu');
const menuItem =document.querySelector("menu-item");
hambuger.addEventListener("click", function(){
    hambuger.classList.toggle("actived");
    navMenu.classList.toggle("actived");
})

// menuItem.forEach(n => n.addEventListener("click", ()=>{
//     hambuger.classList.remove("actived");
//     navMenu.classList.remove("actived");

// }))



//Slider
    // var btns = document.querySelectorAll('.btn');
    // var sliders = document.querySelectorAll('.slider-item');

    // var currentSlide = 1;

    // var manualNav = function (manual){
    //     sliders.forEach((slide) => {
    //         slide.classList.remove('active');

    //         btns.forEach((btn) =>{
    //             btn.classList.remove('active');
    //        });
    //     });
        
    //     sliders[manual].classList.add('active');
    //     btns[manual].classList.add('active');
    // }

    // btns.forEach((btn,i) => {
    //     btn.addEventListener("click",() =>{
    //          manualNav(i);
    //          currentSlide = i;
    //     });
    // });


    // var repeat = function(activeClass){
    //     let active = document.getElementsByClassName('active');
    //     let i = 1;

    //     var repeater = () =>{
    //         setTimeout(function(){
    //             [...active].forEach((activeSlide) =>{
    //                 activeSlide.classList.remove('active');
    //             });
    //                 sliders[i].classList.add('active');
    //                 btns[i].classList.add('active');
    //                 i++;

    //                 if(sliders.length == i){
    //                     i =0;
    //                 }
    //                 if(i >= sliders.length){
    //                     return ;
    //                 }
    //                 repeater();
                
    //         },3000);
    //     }
    //     repeater();
    // }
    // repeat();

// -************************************************************
    // 360 độ
    $(document).ready(function(){
        //Load the image URLs into an Array.
               var arr = new Array();
               $("#dvImages img").each(function () {
                   arr.push($(this).attr("src"));
               });
   
               //Set the first image URL as source for the Product.
               $("#product").attr("src", arr[0]);
   
               // //Click mode.
               // $("#product1").threesixty({ images: arr,
               //     method: 'click',
               //     sensibility: 1
               // });
   
               //MouseMove mode.
               $("#product").threesixty({ images: arr,
                   method: 'mousemove',
                   sensibility: 1
               });
   
               //Automatic mode.
            //    $("#product").threesixty({ images: arr,
            //        method: 'auto',
            //        direction: 'forward',
            //        autoscrollspeed: 1000
            //    });
               setTimeout(function(){ 
               $(".progressBg").hide();
               $(".overlay").hide();
                 }, 3000);
       
       
       })
// *************************************************************************************
//comment
    var nagis = document.querySelectorAll('.nagi');
    var experiences = document.querySelectorAll('.experience-items');

    let count = 1;

    var manualNav = function (manual){
        experiences.forEach((experience) => {
            experience.classList.remove('change');

            nagis.forEach((nagi) =>{
                nagi.classList.remove('change');
        });
        });
        
        experiences[manual].classList.add('change');
        nagis[manual].classList.add('change');
    }

    nagis.forEach((nagi,i) => {
        nagi.addEventListener("click",() =>{
            manualNav(i);
            count = i;
        });
    });

    //autoplay navigation

    var repeat = function(activeClass){
        let active = document.getElementsByClassName('change');
        let i = 1;

        var repeater = () =>{
            setTimeout(function(){
                [...active].forEach((activeSlide) =>{
                    activeSlide.classList.remove('change');
                });
                experiences[i].classList.add('change');
                nagis[i].classList.add('change');
                    i++;

                    if(experiences.length == i){
                        i =0;
                    }
                    if(i >= experiences.length){
                        return ;
                    }
                    repeater();
                
            },3000);
        }
        repeater();
    }
    repeat();
// *****************************************************************
// Show hide img
    var check = document.getElementById('checkbox-img');
    var img1 = document.getElementById('img-1');
    var img2 = document.getElementById('img-2');
    check.addEventListener("click", function(){
        if(check.checked == true ){
        
            img1.style.display = 'none';
            img2.style.display = 'block';
        }else{
            img1.style.display = 'block';
            img2.style.display = 'none';
        }
    })
// Slide story
    var storys = document.querySelectorAll('.story-item');
    var nextBtn = document.querySelector(".next-btn");
    var prevBtn = document.querySelector(".prev-btn");
    var curentIndex = 0;

    nextBtn.addEventListener("click",function(){
        storys[curentIndex].classList.remove('story-active');
        curentIndex = (curentIndex +1 ) % storys.length;
        storys[curentIndex].classList.add("story-active");
    })
    prevBtn.addEventListener("click",function(){
        storys[curentIndex].classList.remove('story-active');
        curentIndex = (curentIndex - 1 + storys.length) % storys.length;
        storys[curentIndex].classList.add("story-active");
    })




