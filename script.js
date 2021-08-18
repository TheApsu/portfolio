'use strict'

const $nav = document.getElementById('nav-menu');
const $preview = document.getElementById('preview');
const $flexContent = document.querySelector('.flex-content');
const $flexBox = document.querySelectorAll('.flex-content__child');
const $btnShowInfo = document.querySelectorAll('.btn-seeInfo');
const $platformsContent = document.querySelector('.content__platforms');
const $git = document.getElementById('git');
const $gitHub = document.getElementById('github');

const options = {
    threshold: .5   
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

for(let i = 0; i < $btnShowInfo.length; i++){
    $btnShowInfo[i].addEventListener('click', e => {
        if(e.path[0].classList.value.includes('show')){
            
            $btnShowInfo[i].textContent = 'SHOW INFORMATION'
            $btnShowInfo[i].removeAttribute('style')
            e.path[2].childNodes[3].style.animation = 'desaparecer .2s both'; 
            e.path[0].classList.remove('show');
            e.path[3].removeAttribute('style')

        }else {          
            $btnShowInfo[i].textContent = 'HIDE INFORMATION'
            changeBackgroundBtnColor($btnShowInfo[i], '#fff', '#2af')
            e.path[2].childNodes[3].style.animation = 'aparecer .2s both';
            e.path[0].classList.add('show');
            e.path[3].style.flexBasis = '90%'
        }
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
    let Y1 = 80 - scrollY;
    if(scrollY == 0){
        $preview.style.animation = 'previewShow 1s forwards'
    }else{
        $preview.style.animation = 'previewHide 1s forwards'
    }
})