share = document.querySelector(".share");
shown = document.querySelector(".shown");
profile = document.querySelector(".profile");



let count = 0;
if(window.innerWidth > 375){
    share.addEventListener('click', function onClick(e) {
        count ++;
        if (count %2 == 0) {
            shown.style.display = "none";
            share.style.backgroundColor = "hsl(210, 46%, 95%)";
        } else {
            shown.style.display = "flex";
            share.style.backgroundColor = "hsl(212, 23%, 69%)";
        } 
    }); 
}



if(window.innerWidth < 375){
    share.addEventListener('click', function onClick(e) {
        profile.style.display = "none";
        shown.style.display = "flex"; 
    }); 
}
