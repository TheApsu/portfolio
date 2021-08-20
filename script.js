'use strict'

const $nav = document.getElementById('nav-menu');
const $preview = document.getElementById('preview');
const $flexContent = document.querySelector('.flex-content');
const $flexBox = document.querySelectorAll('.flex-content__child');
const $platformsContent = document.querySelector('.content__platforms');
const $git = document.getElementById('git');
const $gitHub = document.getElementById('github');
const $btnGoToSite = document.querySelectorAll('.btn-go-to-site');


const options = {
    threshold: .3   
}

const showPlatformContent = entries => {
    if(entries[0].isIntersecting){
        $git.style.animation = 'showGit .3s forwards'
        $gitHub.style.animation = 'showGit .3s forwards'
    }else{
        $git.style.animation = 'hideGit .3s forwards'
        $gitHub.style.animation = 'hideGit .3s forwards'
    }
}

const IB = new IntersectionObserver(showPlatformContent, options)
IB.observe($platformsContent)


const changeBackgroundBtnColor = (btn ,fontColor, bgColor) => {
    btn.style.color = fontColor;
    btn.style.background = bgColor;
}

for (let i = 0; i < $btnGoToSite.length; i++) {
    $btnGoToSite[i].addEventListener('click', e => {
        window.open($btnGoToSite[i].childNodes[0].href)
    })
}


const aparecer = entries => {
    if(entries[0].isIntersecting) {
        for(let i of $flexBox){
            i.style.animation = 'showFlexBox .5s both'

        }      
    }else{
        for(let i of $flexBox){
            i.style.animation = 'hideFlexBox .5s forwards'
        }  
    }
}

const observer2 = new IntersectionObserver(aparecer, options)

observer2.observe($flexContent)

window.addEventListener('scroll', e => {
    let Y1 = 100 - scrollY;
    if(scrollY == 0){
        $preview.style.animation = 'previewShow 1.5s forwards'
    }else{
        $preview.style.animation = 'previewHide 1.5s forwards'
    }
})
