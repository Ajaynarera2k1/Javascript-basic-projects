
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// var timeout;
function firstpageanim(){
    var tl= gsap.timeline();
    tl.from(".nav", {
        y:'-10',
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOUt 
    })
    .to(".boundingelem", {
        y:0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOUt,
        stagger:.2

    })
    .from(".herofooter", {
        y:-10,
        duration: 1.5,
        opacity:0,
        delay:-1,
        ease: Expo.easeInOUt 
    })
}

function mousesizechange(){
    var xscale= 1;
    var yscale=1;

    var xprev =0;
    var yprev =0;

    window.addEventListener("mousemove",function(dets){

    //   clearTimeout(timeout);
      xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
      yscale = gsap.utils.clamp(.8,1.2,dets.clienty - yprev);
    
      xprev = dets.clientX;
      yprev = dets.clientY;
      
      circlrmousefollower(xscale,yscale);
  
    //  timeout = setTimeout(() => {
    //       document.querySelector("#minicircle").style.transform =`translate(${details.clientX}px,${details.clientY}px) scale(1,1)`;
  
    //   },100)
    
    });
}
 document.querySelectorAll(".elem").forEach(function(elem){
            var rotate= 0;
            var diffrot = 0;

            elem.addEventListener("mousemove", function(dets) {
                var diff = dets.clientY-elem.getBoundingClientRect().top;
                diffrot = dets.clientX - rotate;
                rotate = dets.clientX;
                gsap.utils.clamp(-20,20,diffrot);
                gsap.to(elem.querySelector("img"),{
                    opacity :1,
                    ease :power3,
                    top :diff,
                    left :dets.clientX
                });
            });
 }); 








mousesizechange();
function circlrmousefollower(xscale,yscale){
    
    window.addEventListener("mousemove", (dets) => {
            document.querySelector("#minicircle").style.transform =`translate(${dets.clientX}px , ${dets.clientY}px) `;
            // scale(${xscale},${yscale})
    })
}
circlrmousefollower();
firstpageanim();
