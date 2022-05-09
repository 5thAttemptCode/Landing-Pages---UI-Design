var elipse = document.getElementsByClassName("elipse");
document.onmousemove = function(){
    var x = event.clientX * 11 / window.innerWidth + "%";
    var y = event.clientY * 5 / window.innerHeight + "%";

    for(var i=0;i<2;i++){
        elipse[i].style.left = x;
        elipse[i].style.top = y;
        elipse[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}

gsap.to(".text", {duration: 2, delay: 1.7, opacity: 1});
gsap.to("nav", {duration: 2, delay: 2, opacity: 1});
gsap.to(".eye", {duration: 2, delay: 1.5, opacity: 1});


