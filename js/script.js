var navlist= document.querySelector('.navbar')
addclass = function(e,name){
    e.classList.toggle(name);
    navlist.classList.toggle('active')
}