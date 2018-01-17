
document.addEventListener("DOMContentLoaded", e => {
    let blankiPhoneImg = new Image();
    blankiPhoneImg.src = "images/blankiPhone.png";
    
    //wait for blank iphone image to load before animations begin
    blankiPhoneImg.onload = () => {
        document.getElementsByClassName("iphone-img")[0].appendChild(blankiPhoneImg);
        animateLogo();
    };
  }
);

let animateLogo = () => {
  let logoEl = document.getElementById("main-logo");
  setTimeout(() => {
    logoEl.style.display = 'block';
    fadeIn(logoEl);
  }, 1000);
  
  //wait until fadeIn is done plus 1 sec, then slide logoup
  logoEl.addEventListener("webkitAnimationEnd", () => {
    setTimeout(() => {
      slideElement(logoEl, 0, -150);
      displayMainBtns();
    }, 1500);
  } ,false);
};
let displayMainBtns = () => {
  let i = 0;
  let currTicker = setInterval(()=>{
    if(i >= document.getElementsByClassName('main-btns')[0].childElementCount) {
      clearInterval(currTicker);
    } else {
      let currBtnEl = document.getElementsByClassName('main-btns')[0].children[i];
      currBtnEl.style.animation = 'fadeIn .5s ease-in 1 forwards';
      fadeIn(currBtnEl);
      i++;
    }
  }, 100);
};
let fadeIn = element => {  
  if (element.classList.contains('is-paused')){
    element.classList.remove('is-paused');
  }
};
let slideElement = (slidingEl, xScrollDistance, yScrollDistance) => {
  setInterval(()=> {
    let shouldScrollHorizontally = Math.abs(xScrollDistance) > 1;
    let shouldScrollVertically = Math.abs(yScrollDistance) > 1;
    
    //end function if we've hit our destination
    if(!shouldScrollHorizontally && !shouldScrollVertically){
      clearInterval(slideElement);
    }
    
    //figure out where slidingEl is horizontally
    let currLeft = slidingEl.style.left ? parseInt(slidingEl.style.left) : 0;
    //shift slidingEl 1 px horizontally
    if(shouldScrollHorizontally){
      let diff = xScrollDistance < 1 ? 1 : -1;
      slidingEl.style.left = currLeft - diff + "px";
      xScrollDistance += diff;
    }

    //figure out where slidingEl is vertically
    let currTop = slidingEl.style.top ? parseInt(slidingEl.style.top) : 0;
    //shift slidingEl 1 px vertically
    if(shouldScrollVertically){
      let diff = yScrollDistance < 1 ? 1 : -1;
      slidingEl.style.top = currTop - diff + "px";
      yScrollDistance += diff;
    }
  }, 1);
};