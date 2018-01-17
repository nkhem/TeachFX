
document.addEventListener("DOMContentLoaded", e => {
    let blankiPhoneImg = new Image();
    blankiPhoneImg.src = "images/blankiPhone.png";
    
    //wait for blank iphone image to load before animations begin
    blankiPhoneImg.onload = () => {
        document.getElementsByClassName("iphone-img")[0].appendChild(blankiPhoneImg);   
        animateLogo();
        
        // let i = document.getElementsByClassName('main-icons')[0].childElementCount.
        // setInterval(()=>{
        //   document.getElementsByClassName('main-icons')[i].style.display = 'flex';  
        // }, 700);
    };
  }
);

let animateLogo = () => {
  let logoEl = document.getElementById("main-logo");
  setTimeout(() => {
    fadeElementIn(logoEl);
  }, 1000);
  
  //wait until fadeElementIn is done plus 1 sec, then slide logoup
  logoEl.addEventListener("webkitAnimationEnd", () => {
    setTimeout(() => {
      slideElement(logoEl, 0, -150);
    }, 1500);
  } ,false);
};
let fadeElementIn = logoEl => {
  logoEl.style.display = 'block';
  
  //fade logo in
  if (logoEl.classList.contains('is-paused')){
    logoEl.classList.remove('is-paused');
  }
};
let slideElement = (slidingEl, xScrollDistance, yScrollDistance) => {
  setInterval(()=> {
    let shouldScrollHorizontally = Math.abs(xScrollDistance) > 1;
    let shouldScrollVertically = Math.abs(yScrollDistance) > 1;
    
    //end function if we've hit our destination
    if(!(shouldScrollHorizontally || shouldScrollVertically)){
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