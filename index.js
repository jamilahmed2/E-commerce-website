const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
    
}


var mainimage = document.getElementById("mainimage");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(smallimg){
    mainimage.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimage.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimage.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimage.src = smallimg[3].src;
}
smallimg[0].onclick = function(){
    mainimage.src = smallimg[0].src;
}