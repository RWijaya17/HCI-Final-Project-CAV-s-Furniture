function myNav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bar.src = "images/menu.png"
        }else{
            nav.style.right = "0%";
            bar.src = "images/x.png"
        }
    }
}
myNav();

function myHeader(){
    let header = document.getElementById("header");
    let lamp = document.getElementById("lamp");
    window.addEventListener("scroll",function(){
        if(window.scrollY > 0){
            header.classList.add("active")
            lamp.src = "images/wbulb.png";
        }else{
            header.classList.remove("active")
            lamp.src = "images/lbulb.png";
        }
    })
}
myHeader()


function myFun(){
    let plus = document.querySelector(".plus");
    let textBox = document.querySelector(".text-box");
    plus.onclick = ()=>{
        textBox.classList.toggle("active")
        plus.classList.toggle("img_active")
    }
}
myFun()

function myVideo(){
    let links = document.querySelector(".link_a");
    let overs = document.querySelector(".bg-show .overlay");
    let exit = document.querySelector(".cancel");
    let player = document.querySelector(".player");
    let videos = document.getElementById("video");
    links.onclick = (ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick = ()=>{
        overs.style.display = "none"
    }
    player.onclick = ()=>{
        if(videos.paused){
            videos.play();
            player.src = "images/pause.png"
        }else{
            videos.pause();
            player.src = "images/play.png"
        }
    }
}
myVideo()

function toTop(){
    let top = document.querySelector(".top");
    window.onscroll = ()=>{
        if(window.scrollY > 100 || document.documentElement.scrollTop > 100){
            top.style.display = "block"
        }else{
            top.style.display = "none"
        }
    }

    top.onclick = ()=>{
        scrollTo(0,0)
    }
}
toTop();
