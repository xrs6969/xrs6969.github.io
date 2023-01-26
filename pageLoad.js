const tl = gsap.timeline({defaults: { ease: "power1.out"}});
var i =0,text;

text = "Get them Bitches boy right now"

tl.to(".text", { y: "0%", duration: 1, stagger:0.25});
tl.to('.slider', {y: "-100%", duration:1.5,delay:0.5});
tl.to('.intro',{y: "-100%",duration:1}, "-=1.1");
tl.fromTo("header", {opacity: 0}, {opacity:1, duration: 1});



function typing()
{
    if(i < text.length)
    {

        document.getElementById("mainText").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
setTimeout(typing,6000);

/*
About Us Page
*/






