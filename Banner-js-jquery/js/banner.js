var index = 0,
    img = document.getElementById("banner").getElementsByTagName("div"),
    dots = document.getElementById("dots").getElementsByTagName("span"),
    len = img.length,
    interval = null,
    menuLv1 = document.getElementById("menu-content").getElementsByTagName("div"),
    menuLv2 = document.getElementById("sub-menu").getElementsByClassName("inner-box"),
    menuBox = document.getElementById("sub-menu");

function imgShowLoop() {

   interval = setInterval(function () {
        index++;
        show();
    },2000)

}

function show() {

    if (index > 2){
        index = 0;
    }else if (index < 0){
        index = 2;
    }
    for (var i = 0;i<len;i++)
    {
        img[i].style.display = "none";
        dots[i].className = "";
    }
    img[index].style.display = "block";
    dots[index].className = "active";
}


function addDotClick() {
    for (var i = 0,len = dots.length;i<len ; i++){
        dots[i].setAttribute("dotsIndex",i);
        dots[i].onclick=function () {
            clearInterval(interval);
            index = this.getAttribute("dotsIndex");
            show();
            imgShowLoop();
        }
    }
}

function addMenuEvent() {
    for (var i=0,len=menuLv1.length;i<len;i++){
        menuLv1[i].setAttribute("menuIndex",i);
        menuLv2[i].setAttribute("submenuIndex",i);
        menuLv1[i].onmouseover = function () {
            this.style.background = "rgba(0,0,0,0.1)";
            menuBox.style.display = "block";
            menuLv2[this.getAttribute("menuIndex")].style.display = "block";
        }
        menuLv1[i].onmouseout = function () {
            this.style.background = "none";
            menuBox.style.display = "none";
            menuLv2[this.getAttribute("menuIndex")].style.display = "none";
        }
        menuLv2[i].onmouseover = function(){
            menuLv1[this.getAttribute("submenuIndex")].style.background = "rgba(0,0,0,0.1)";
            menuBox.style.display = "block" ;
            this.style.display = "block";
        }
        menuLv2[i].onmouseout = function () {
            menuLv1[this.getAttribute("submenuIndex")].style.background = "none";
            menuBox.style.display = "none";
            this.style.display = "none";
        }
    }
}

function mainMethod(){
     addDotClick();
    imgShowLoop();
    addMenuEvent();
    document.getElementById("banner").onmouseover=function () {
        clearInterval(interval);
    }
    document.getElementById("banner").onmouseout=function () {
        imgShowLoop();
    }
    document.getElementById("pre").onclick=function () {
        clearInterval(interval);
        index--;
        show();
        imgShowLoop();
    }
    document.getElementById("next").onclick=function () {
        clearInterval(interval);
        index++;
        show();
        imgShowLoop();
    }


}

mainMethod();