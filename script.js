const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

var tl=gsap.timeline()

tl.to("#page1",{
    y:"100vh",
    duration:0,
    scale:0.6,
    // delay:1
})
tl.to("#page1",{
    y:"30vh",
    duration:1,
    scale:0.6,
    delay:1
})
tl.to("#page1",{
    rotate:360,
    duration:0.8,
    scale:1,
    y:"0vh"
})


function boxslide(){
    

var box1=document.querySelector("#page8-box1")
var box2=document.querySelector("#page8-box2")
var box3=document.querySelector("#page8-box3")
var box4=document.querySelector("#page8-box4")


box1.addEventListener("mouseenter",function(){
    // console.log("hello");
    box2.style.transform=`translateX(0%)`
    box3.style.transform=`translateX(-45%)`
    box4.style.transform=`translateX(-100%)`
    box1.style.backgroundColor="#B0A69C"
})

box1.addEventListener("mouseleave",function(){
    // console.log("hello");
    box2.style.transform=`translateX(-50%)`
    box3.style.transform=`translateX(-100%)`
    box4.style.transform=`translateX(-150%)`
    box1.style.backgroundColor="#C5BCB3"

})

box2.addEventListener("mouseenter",function(){
    // console.log("hello");
    // box2.style.transform=`translateX(0%)`
    box3.style.transform=`translateX(-50%)`
    box4.style.transform=`translateX(-100%)`
    box2.style.backgroundColor="#B0A69C"
})

box2.addEventListener("mouseleave",function(){
    // console.log("hello");
    // box2.style.transform=`translateX(-50%)`
    box3.style.transform=`translateX(-100%)`
    box4.style.transform=`translateX(-150%)`
    box2.style.backgroundColor="#C5BCB3"

})
box3.addEventListener("mouseenter",function(){
    // console.log("hello");
    // box2.style.transform=`translateX(0%)`
    // box3.style.transform=`translateX(-45%)`
    box4.style.transform=`translateX(-100%)`
    box3.style.backgroundColor="#B0A69C"
    
})

box3.addEventListener("mouseleave",function(){
    // console.log("hello");
    // box2.style.transform=`translateX(-50%)`
    // box3.style.transform=`translateX(-100%)`
    box4.style.transform=`translateX(-150%)`
    box3.style.backgroundColor="#C5BCB3"

})
box4.addEventListener("mousemove",function(){
    box4.style.backgroundColor="#B0A69C"
})
box4.addEventListener("mouseleave",function(){
    box4.style.backgroundColor="#C5BCB3"
})
}

boxslide()