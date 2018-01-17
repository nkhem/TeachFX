let logoEl = document.getElementById("main-logo");



document.addEventListener("DOMContentLoaded", e => {
    var blankiPhoneImg = new Image();
    
    blankiPhoneImg.src = "images/blankiPhone.png";
    blankiPhoneImg.onload = () => {
      console.log("image loaded");
        // do whatever here, add it to the background, append the image ect.
        // document.getElementsByClassName("iphone-img")[0].appendChild(blankiPhoneImg);   
    };
    
    document.getElementById('main-icons').style.display = 'flex';
      setTimeout(() => {
        logoEl.style.display = 'block';
        
        //fade logo in
        if (logoEl.classList.contains('is-paused')){
          logoEl.classList.remove('is-paused');
        }
        slideLogoUp();
      }, 1000);
    // }
  }
);

let slideLogoUp = () => {
  // let currMarginTop = parseInt(getComputedStyle(logoEl).marginTop);
  // console.log("sliding up!" + currMarginTop);
  // if(currMarginTop > 100){
  //   logoEl.style.marginTop = currMarginTop - 0.1 + "px";
  //   slideLogoUp();
  // }
};