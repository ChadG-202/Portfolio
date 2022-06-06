//Copyright year
function copyright(){
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("copyright").innerHTML = "Copyright&#169; " + n + " Chad Garratt. All Rights Reserved.";
}
copyright();

//Nav
$('#menu').on('mousedown', function() {
    if($( "#check" ).is( ":checked" )){
        document.getElementById("myNav").style.backgroundColor = "rgba(248, 248, 248, 0)";
        document.getElementById("menuLink").style.display = "none";
        document.getElementById("pname").style.display = "none";
    }else{
        document.getElementById("myNav").style.backgroundColor = "rgb(248, 248, 248)";
        document.getElementById("menuLink").style.display = "block";
        document.getElementById("pname").style.display = "block";
    }
});

function closeNav(){
    document.getElementById("myNav").style.backgroundColor = "rgba(248, 248, 248, 0)";
    document.getElementById("menuLink").style.display = "none";
    document.getElementById("pname").style.display = "none";
    $('#check').prop("checked", false);
}

//video examples
$( "#look1" ).click(function() {
    document.getElementById("vw1").style.display = "block";
    document.getElementById("vw2").style.display = "none";
    document.getElementById("vw3").style.display = "none";
});
$( "#look2" ).click(function() {
    document.getElementById("vw2").style.display = "block";
    document.getElementById("vw1").style.display = "none";
    document.getElementById("vw3").style.display = "none";
});
$( "#look3" ).click(function() {
    document.getElementById("vw3").style.display = "block";
    document.getElementById("vw1").style.display = "none";
    document.getElementById("vw2").style.display = "none";
});

$( "#x1" ).click(function() {
    document.getElementById("vw1").style.display = "none";
});
$( "#x2" ).click(function() {
    document.getElementById("vw2").style.display = "none";
});
$( "#x3" ).click(function() {
    document.getElementById("vw3").style.display = "none";
});

//Load in
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

//Hero
tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 1.3
}, "-=1.5")

gsap.from(".line-anim", {
    stagger: .2,
    delay: 0.5,
    scale: 0,
    duration: 1,
    ease: Back.easeOut.config(1.3)
})

gsap.from(".media-anim", {
    opacity: 0,
    delay: 2.5,
    x: 7,
    stagger: .2,
    ease: Power4.easeOut,
    duration: 1
})

gsap.from(".ball-anim", {
    opacity: 0,
    scale: 0.5,
    stagger: .2,
    ease: Power4.easeOut,
    duration: 1.3
})

//Info
gsap.from(".transition1", {
    scrollTrigger: {
        trigger: '.transition1',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

//Portfolio
gsap.from(".transition2", {
    scrollTrigger: {
        trigger: ".transition2",
        start: "top center"
    },
    y: 40,
    opacity: 0,
    duration: 1
});

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 40,
    opacity: 0,
    duration: 1
});

gsap.from(".transition4", {
    scrollTrigger: {
        trigger: ".transition4",
        start: "top center"
    },
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.5
});

//Education
gsap.from(".skill-an", {
    scrollTrigger: {
        trigger: '.skill-an',
        start: "top bottom"
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: .2
})

//Form
gsap.from(".form-an", {
    scrollTrigger: {
        trigger: '.form-an',
        start: "top bottom"
    },
    delay: .5,
    x: -30,
    opacity: 0,
    duration: .5
})

//Footer links
gsap.from(".link-an", {
    scrollTrigger: {
        trigger: '.link-an',
        start: "top bottom"
    },
    y: 20,
    opacity: 0,
    stagger: .2,
    ease: Power4.easeOut,
    duration: 1    
})