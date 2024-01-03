let Onbtn = document.getElementById("onBulb");
let Offbtn = document.getElementById("offBulb");
Onbtn.addEventListener('click', () => {
     document.getElementById("image").src = "bulb_off.jpg";
     document.getElementById("change").style.marginLeft = "0%"
});
Offbtn.addEventListener('click', () => {
    document.getElementById("image").src = "bulb_on.jpg"
    document.getElementById("change").style.marginLeft = "50%"
});