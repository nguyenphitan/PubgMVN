// Mobile
// page 3:
// contentPageThree
let clickLeft = document.querySelector(".onclickLeft");
let clickRight = document.querySelector(".onclickRight");
let map = document.querySelector("#map");
let left = 0;
let right = 2;
clickLeft.onclick = function() {
    if(left == 0)   return;
    else {
        map.style.transform += "translateX(" + 25 + "%)"
        left--;
        right++;
    }
}

clickRight.onclick = function() {
    if(right == 0)   return;
    else {
        map.style.transform += "translateX(-" + 25 + "%)"
        right--;
        left++;
    }
}
