let logoEl = document.getElementById("mainLogo");

document.addEventListener("DOMContentLoaded", e => {
    // document.getElementById('mainIcons').style.display = 'flex';
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