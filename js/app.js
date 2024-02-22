let sectionImg = document.querySelector('.section-img-2')
let headerHamburger = document.querySelector('.header-hamburger')
let sectionn = document.querySelector('.section')
let cloce = document.querySelector('.section-imglar')



cloce.addEventListener('click' , function(){
sectionn.style.display = 'none'
})

headerHamburger.addEventListener('click' , function(){
    sectionn.style.display = 'block'
})

let featuresLink = document.querySelectorAll('.features-link')
featuresLink.forEach(function(item){
    item.addEventListener('click' , function(){
        featuresLink.forEach(function(element){
            element.classList.remove("active")
        })
        item.classList.add("active")
    })
})