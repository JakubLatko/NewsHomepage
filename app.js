var openIcon = document.getElementById("openIcon")
var closeIcon = document.getElementById("closeIcon")
var navigationList = document.querySelector(".navigationList")
burgerMenu.addEventListener("click", ()=>{
    if(navigationList.ariaExpanded=="false"){
        openIcon.src = "assets/images/icon-menu-close.svg";
        navigationList.setAttribute("aria-expanded", "true");
        navigationList.classList.add("opened")
        navigationList.classList.remove("closed")
    }
    else if(navigationList.ariaExpanded == "true"){
        openIcon.src = "assets/images/icon-menu.svg";
        navigationList.setAttribute("aria-expanded", false);
        navigationList.classList.add("closed")
        navigationList.classList.remove("opened")
    }
})


